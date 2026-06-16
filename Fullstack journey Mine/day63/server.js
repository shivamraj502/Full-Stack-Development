/**
Day 63 – package.json & Nodemon

Topic: npm init, scripts
Task:
Install nodemon
👉 Build:
Auto-restart server
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Nodemon Server okey");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

/** commands
npm init -y
npm install nodemon --save-dev
npm run dev
Run with Nodemon
npm run dev
 */