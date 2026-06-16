/**
Day 65 – Mini Project: File Reader CLI

Task:
Read file from terminal
Print content
👉 Example:
node app.js notes.txt
 */

const fs = require("fs");

// Get filename from command line
const fileName = process.argv[2];

if (!fileName) {
  console.log("Please provide a file name.");
  console.log("Example: node app.js notes.txt");
  process.exit();
}

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log(data);
});