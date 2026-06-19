const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Shivam" },
  { id: 2, name: "Rahul" }
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// POST user
router.post("/", (req, res) => {
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

// PUT user
router.put("/:id", (req, res) => {
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

// DELETE user
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({
    message: "User Deleted"
  });
});

module.exports = router;