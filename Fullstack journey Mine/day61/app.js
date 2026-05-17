/**
Day 61 – Events & Streams

Topic: EventEmitter, streams
Task:
Create custom event
👉 Build:
Trigger event → print message
 * */

console.log("hello backend");

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

// Listening to custom events
emitter.on('greet', (name) => {
    console.log(`Hello ${name}! 👋 Event Triggered Successfully.`);
});

emitter.on('login', (user) => {
    console.log(`🔐 ${user} has logged in at ${new Date().toLocaleTimeString()}`);
});

// Triggering (Emitting) events
emitter.emit('greet', 'Shivam');
emitter.emit('login', 'Shivam Kumar');
emitter.emit('greet', 'Rahul');