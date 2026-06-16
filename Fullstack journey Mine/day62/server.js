/**
Day 62 – HTTP Module

Topic: Create server without Express
Task:
Create basic server
👉 Build:
Show “Hello from server” on browser
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from my server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

/** Run the Server
    node server.js
 */