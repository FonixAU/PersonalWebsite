// pages/api/honeycombs.js
const fs = require('fs');
const path = require('path');

const honeycombsDirectory = path.join(process.cwd(), 'public/experience/');

export default (req, res) => {
  const imageFileNames = fs.readdirSync(honeycombsDirectory);
  const honeycombs = imageFileNames.map((fileName) => ({
    imageUrl: `/stack/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, ''),
  }));

  res.status(200).json({ honeycombs });
};
