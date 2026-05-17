/**
Day 61 – Events & Streams

Topic: EventEmitter, streams
Task:
Create custom event
👉 Build:
Trigger event → print message
 * */

console.log("hello backend");

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}
// const emitter = new MyEmitter();

// // Listening to custom events
// emitter.on('greet', (name) => {
//     console.log(`Hello ${name}! 👋 Event Triggered Successfully.`);
// });

// emitter.on('login', (user) => {
//     console.log(`🔐 ${user} has logged in at ${new Date().toLocaleTimeString()}`);
// });

// // Triggering (Emitting) events
// emitter.emit('greet', 'Shivam');
// emitter.emit('login', 'Shivam Kumar');
// emitter.emit('greet', 'Rahul');



// const EventEmitter = require("events")

// const event = new EventEmitter()

// // Listen event
// event.on("welcome", () => {
//     console.log("Welcome Shivam 🚀")
// })

// // Trigger event
// event.emit("welcome")





// const EventEmitter = require("events")

// const event = new EventEmitter()

// event.on("login", () => {
//     console.log("User logged in")
// })

// event.on("logout", () => {
//     console.log("User logged out")
// })

// event.emit("login")
// event.emit("logout")




const fs = require("fs")
fs.writeFileSync("notes.txt", "Hello Shivam")
const readStream = fs.createReadStream("notes.txt", "utf-8")

readStream.on("data", (chunk) => {
    console.log(chunk)
})