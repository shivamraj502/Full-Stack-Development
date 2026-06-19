/**
Day 75 – MVC Pattern

Task:
Separate:
routes
controllers
👉 Refactor previous API
 */

const express = require("express");
const notesRoutes = require("./routes/notesRoutes");

const app = express();

app.use(express.json());

// Use Routes
app.use("/notes", notesRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});