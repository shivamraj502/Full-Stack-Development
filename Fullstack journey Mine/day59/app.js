/**
Month 3: Backend (Node.js + Express.js)
Week 9 (Days 59–65): Node.js Basics
Day 59 – Intro to Node.js

Topic: Node, npm, modules
Task:
Install Node.js
Run first file: node app.js
Build:
Print system info (OS, username) using os module
 * */

console.log("hello backend");

const os = require("os")

console.log("Operating System:", os.platform())
console.log("Username:", os.userInfo().username)
console.log("Home Directory:", os.homedir())
console.log("CPU Architecture:", os.arch())