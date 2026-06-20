/**
Day 85 – Logout & Refresh Token

Task:
Invalidate token
 */


const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

let refreshTokens = [];
let blacklistedTokens = [];

// Login
app.post("/login", (req, res) => {
  const user = { email: "shivam@gmail.com" };

  const accessToken = jwt.sign(user, "accessSecret", {
    expiresIn: "15m"
  });

  const refreshToken = jwt.sign(user, "refreshSecret", {
    expiresIn: "7d"
  });

  refreshTokens.push(refreshToken);

  res.json({
    accessToken,
    refreshToken
  });
});

// Refresh Token
app.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token required"
    });
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({
      message: "Invalid refresh token"
    });
  }

  jwt.verify(refreshToken, "refreshSecret", (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid refresh token"
      });
    }

    const newAccessToken = jwt.sign(
      { email: user.email },
      "accessSecret",
      { expiresIn: "15m" }
    );

    res.json({
      accessToken: newAccessToken
    });
  });
});

// Logout
app.post("/logout", (req, res) => {
  const token = req.headers.authorization;

  blacklistedTokens.push(token);

  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== refreshToken);

  res.json({
    message: "Logged out successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});