/**
Day 82 – Sessions & Cookies

Task:
Store session
👉 Compare:
JWT vs sessions
 */


const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true
  })
);

// Login Route
app.post("/login", (req, res) => {
  req.session.user = {
    email: "shivam@gmail.com"
  };

  res.json({
    message: "Login successful",
    session: req.session
  });
});

// Profile Route
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  res.json({
    message: "Profile accessed",
    user: req.session.user
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});