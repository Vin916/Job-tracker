const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3002;

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files
app.use(express.static('public'));

// CSV upload endpoint
app.post('/upload', upload.single('csvFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const csvContent = req.file.buffer.toString('utf-8');
  res.json({ success: true, data: csvContent });
});

app.listen(PORT, () => {
  console.log(`🚀 Job Tracker running at http://localhost:${PORT}`);
});

