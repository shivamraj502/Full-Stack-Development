/**
Day 78 – JSON & Form Data

Task:
Handle both formats
 */


const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JSON Route
app.post("/json", (req, res) => {
  res.json({
    message: "JSON Data Received",
    data: req.body
  });
});

// Form Data Route
app.post("/form", (req, res) => {
  res.json({
    message: "Form Data Received",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


/*
json :> body :> row
form :> body → x-www-form-urlencoded
*/