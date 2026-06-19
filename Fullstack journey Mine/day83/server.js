/**
Day 83 – Role-Based Auth

Task:
Admin vs user
👉 Build:
Protect admin route
 */


const express = require("express");

const app = express();

app.use(express.json());

// Dummy users
const users = [
  {
    email: "admin@gmail.com",
    role: "admin"
  },
  {
    email: "user@gmail.com",
    role: "user"
  }
];

// Middleware for admin check
const checkAdmin = (req, res, next) => {
  const email = req.headers.email;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  if (user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin only."
    });
  }

  next();
};

// Public route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Protected Admin Route
app.get("/admin", checkAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});