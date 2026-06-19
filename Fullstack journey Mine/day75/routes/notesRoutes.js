const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote
} = require("../controllers/notesController");

router.get("/", getAllNotes);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;