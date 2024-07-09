import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 5001;  // Using port 5001 to avoid conflicts

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve static files from two different directories
app.use('/images/carousel1', express.static(path.resolve('src', 'images', 'carousel1')));
app.use('/images/carousel2', express.static(path.resolve('src', 'images', 'carousel2')));

// Endpoint to get list of images in the first carousel directory
app.get('/images-list/carousel1', (req, res) => {
  const directoryPath = path.resolve('src', 'images', 'carousel1');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    res.send(files);
  });
});

// Endpoint to get list of images in the second carousel directory
app.get('/images-list/carousel2', (req, res) => {
  const directoryPath = path.resolve('src', 'images', 'carousel2');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    res.send(files);
  });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
