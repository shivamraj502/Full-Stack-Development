/**
Day 102 – CRUD with Mongo + Express

Task:
Create REST API
👉 Build:
Notes API with DB
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/notesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

// Model
const Note = mongoose.model("Note", noteSchema);



// CREATE Note
app.post("/notes", async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json({ message: "Note Created" });
});



// READ Notes
app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});



// UPDATE Note
app.put("/notes/:id", async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Note Updated" });
});



// DELETE Note
app.delete("/notes/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note Deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});