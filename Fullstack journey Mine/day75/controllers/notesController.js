let notes = [
  { id: 1, title: "DSA", content: "Practice arrays" },
  { id: 2, title: "Node", content: "Learn Express" }
];

// GET all notes
const getAllNotes = (req, res) => {
  res.json(notes);
};

// GET single note
const getSingleNote = (req, res) => {
  const id = parseInt(req.params.id);

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note Not Found"
    });
  }

  res.json(note);
};

// CREATE note
const createNote = (req, res) => {
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
};

// UPDATE note
const updateNote = (req, res) => {
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
};

// DELETE note
const deleteNote = (req, res) => {
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
};

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote
};