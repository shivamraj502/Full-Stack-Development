const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.json({ message: "Task Created", task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({ message: "Task Updated", task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};