/**
Day 84 – Protect Routes

Task:
Middleware to verify token
 */


const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

// Login Route
app.post("/login", (req, res) => {
  const token = jwt.sign(
    { email: "shivam@gmail.com" },
    "mysecretkey",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

// Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});