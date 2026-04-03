/**
Day 18: Error handling (try/catch).
👉 Task: Build a safe calculator (handles division by 0).
 */

function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let resultText = document.getElementById("result");

    try {
        let result;

        if (op === "+") result = a + b;
        else if (op === "-") result = a - b;
        else if (op === "*") result = a * b;
        else if (op === "/") {
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            result = a / b;
        }

        resultText.innerHTML = "Result: " + result;
        resultText.style.color = "green";

    } catch (error) {
        resultText.innerHTML = "Error: " + error.message;
        resultText.style.color = "red";
    }
}
