// const fs = require("fs")
// fs.writeFileSync("filename", "data")

const fs = require("fs")
fs.writeFileSync("notes.txt", "Hello Shivam")

// const fs = require("fs")
fs.writeFileSync("notes.docx", "Hello Shivam")

// fs.readFileSync("filename", "utf-8")
// const fs = require("fs")
const data = fs.readFileSync("notes.txt", "utf-8")
console.log(data)


// fs.appendFileSync("filename", "new data")
// const fs = require("fs")
fs.appendFileSync("notes.txt", "\nI am learning Node.js")


// fs.unlinkSync("filename")
// const fs = require("fs")
fs.unlinkSync("notes.txt")