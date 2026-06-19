/**
Day 74 – Postman

Task:
Test all APIs
👉 Practice:
GET, POST, PUT, DELETE
 */



const express = require("express");

const app = express();

app.use(express.json());

// Dummy Notes Data
let notes = [
  { id: 1, title: "DSA", content: "Practice arrays" },
  { id: 2, title: "Node", content: "Learn Express" }
];


// CREATE Note
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


// READ All Notes
app.get("/notes", (req, res) => {
  res.json(notes);
});


// READ Single Note
app.get("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note Not Found"
    });
  }

  res.json(note);
});


// UPDATE Note
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


// DELETE Note
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


/**
POST:> body :> row :>
{
  "title": "Test note",
  "content": "Created from Postman"
}

PUT:
{
  "title": "Updated Note",
  "content": "Updated from Postman"
}
 */