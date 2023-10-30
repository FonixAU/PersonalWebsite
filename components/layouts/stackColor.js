function rgbToHex(rgb) {
  // Extract R, G, and B components from the string
  const match = /rgb\((\d+), (\d+), (\d+)\)/.exec(rgb);
  if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);

      // Convert each component to HEX
      const hexR = r.toString(16).padStart(2, '0');
      const hexG = g.toString(16).padStart(2, '0');
      const hexB = b.toString(16).padStart(2, '0');

      return `#${hexR}${hexG}${hexB}`;
  }

  return null; // Return null if the format doesn't match
}

export function getStackColour(imagePath) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = imagePath;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const pixels = imageData.data;

      const colorCounts = {};

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        const color = `rgb(${r}, ${g}, ${b})`;

        if (a === 0) {
          continue; // Skip transparent pixel
        }
        if (colorCounts[color]) {
          colorCounts[color]++;
        } else {
          colorCounts[color] = 1;
        }
      }

      // Create a copy of colorCounts to retain the original color palette
      const colorPaletteCopy = { ...colorCounts };

      // Sort the colorCounts object by count in descending order
      const sortedColors = Object.keys(colorCounts).sort(
        (a, b) => colorCounts[b] - colorCounts[a]
      );

      // Get the top 5 colors
      const top5Colors = sortedColors.slice(0, 5);

      resolve({
        rgb: sortedColors[0],
        hex: rgbToHex(sortedColors[0]),
        count: colorCounts[sortedColors[0]],
        colorPallete: top5Colors
      });
    };
  });
}
