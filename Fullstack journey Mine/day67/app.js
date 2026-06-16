/**
Day 67 – Routing

Task:
Create routes:
/
/about
👉 Build:
Return different responses
 */


const express = require("express");

const app = express();

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});
app.get("/about", (req, res) => {
  res.send("Hello from about page!");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});