/** Day 24: Event loop & execution context.
👉 Task: Write async code and predict order of outputs. */

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");