/**
Day 100 – Mini Project: Blog DB

Task:
Create blog schema
Add & fetch blogs
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Blog Schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});

// Blog Model
const Blog = mongoose.model("Blog", blogSchema);

// Add Blog
app.post("/blogs", async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.json({
        message: "Blog added successfully"
    });
});

// Fetch Blogs
app.get("/blogs", async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});