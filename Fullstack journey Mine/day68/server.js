/**
Day 68 – Middleware

Task:
Create custom middleware
👉 Build:
Log request time
 */

const express = require("express");

const app = express();

// Custom Middleware
const logTime = (req, res, next) => {
  console.log("Request Time:", new Date().toLocaleString());
  next(); // Pass control to next middleware/route
};

// Use Middleware
app.use(logTime);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});