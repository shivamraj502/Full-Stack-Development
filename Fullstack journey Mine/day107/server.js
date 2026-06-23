/**
Day 107 – Mini Project: Task Manager API

Task:
Add tasks
Update tasks
Delete tasks
Store in MongoDB
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/taskDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Model
const Task = mongoose.model("Task", taskSchema);


// CREATE Task
app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({ message: "Task Added" });
});


// READ Tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});


// UPDATE Task
app.put("/tasks/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Task Updated" });
});


// DELETE Task
app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});