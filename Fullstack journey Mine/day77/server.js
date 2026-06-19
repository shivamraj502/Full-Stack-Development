/**
Day 77 – File Upload

Topic: Multer
👉 Build:
Upload image API
 */

const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("File Upload API");
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "Image uploaded successfully",
    file: req.file
  });
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: err.message
    });
  }

  res.status(500).json({
    message: "Server error",
    error: err.message
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});