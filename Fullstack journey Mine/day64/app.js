/**
Day 64 – Async in Node

Topic: Callbacks, promises, async/await
Task:
Read file using async methods
 */

// const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error:", err);
//     return;
//   }

//   console.log(data);
// });



// const fs = require("fs").promises;

// fs.readFile("data.txt", "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });



const fs = require("fs").promises;

async function readMyFile() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

readMyFile();