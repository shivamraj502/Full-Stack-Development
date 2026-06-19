/**
Day 79 – Mini Project: Notes API

Task:
Create notes
Update notes
Delete notes
Store in memory (array)
 */


const express = require("express");
const app = express();

app.use(express.json());

// Memory storage
let notes = [
  {
    id: 1,
    title: "DSA",
    content: "Practice Arrays"
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Notes API Running");
});

// Create Note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: notes.length + 1,
    title,
    content
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note Created",
    note: newNote
  });
});

// Update Note
app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note Not Found"
    });
  }

  note.title = title;
  note.content = content;

  res.json({
    message: "Note Updated",
    note
  });
});

// Delete Note
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note Not Found"
    });
  }

  notes = notes.filter(n => n.id !== id);

  res.json({
    message: "Note Deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});