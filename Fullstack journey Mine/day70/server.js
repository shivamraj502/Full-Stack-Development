/**
Day 70 – Error Handling

Task:
Create error middleware
👉 Build:
Handle invalid route
 */

const express = require("express");

const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// About Route
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

// Error Middleware (Must be last)
app.use((req, res) => {
  res.status(404).send("404 Error: Route Not Found");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});