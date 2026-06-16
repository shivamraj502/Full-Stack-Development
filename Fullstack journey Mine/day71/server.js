/**
Day 71 – REST API Basics

Topic: GET, POST, PUT, DELETE
👉 Build:
Simple user API
 */

const express = require("express");

const app = express();

app.use(express.json());

// Dummy User Data
let users = [
  { id: 1, name: "Shivam" },
  { id: 2, name: "Rahul" }
];

/* GET - Fetch All Users */
app.get("/users", (req, res) => {
  res.json(users);
});

/* POST - Add User */
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User Added",
    user: newUser
  });
});

/* PUT - Update User */
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  user.name = req.body.name;

  res.json({
    message: "User Updated",
    user
  });
});

/* DELETE - Remove User */
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({
    message: "User Deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/**
❌ Wrong:
DELETE http://localhost:3000/users/2

✅ Correct:
http://localhost:3000/users/2
 */