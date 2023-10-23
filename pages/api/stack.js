// pages/api/files.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), 'public/images/experience/stack');

  try {
    const files = fs.readdirSync(folderPath);
    const fileData = files.map((fileName) => {
      const filePath = `/images/experience/stack/${fileName}`;
      const alt = path.parse(fileName).name; // Get the filename without extension
      return { imageUrl: filePath, alt };
    });
    res.status(200).json(fileData);
  } catch (error) {file
    console.error(error);
    res.status(500).json({ error: 'An error occurred while reading files.' });
  }
}
