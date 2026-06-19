/**
Day 76 – Express Router

Task:
Use router instead of app routes
 */


const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Use Router
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});