// pages/api/honeycombs.js
import fs from 'fs';
import path from 'path';

export default (req, res) => {
  try {
    // Construct the absolute path to the images directory
    const imagesDirectory = path.join(process.cwd(), 'public/images/experience/stack');

    // Read the files in the images directory
    const imageFileNames = fs.readdirSync(imagesDirectory);

    // Create an array of honeycombs from the file names
    const honeycombs = imageFileNames.map((fileName) => ({
      imageUrl: `/images/experience/stack/${fileName}`,
      alt: fileName.replace(/\.[^/.]+$/, ''), // Remove file extension
    }));

    res.status(200).json({ honeycombs });
  } catch (error) {
    console.error('Error fetching honeycombs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
