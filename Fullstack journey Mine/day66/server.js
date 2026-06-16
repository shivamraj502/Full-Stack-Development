/**
Day 66 – Intro to Express

Task:
Install Express
Create server
👉 Build:
Basic route /
 */

const express = require("express");

const app = express();

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});