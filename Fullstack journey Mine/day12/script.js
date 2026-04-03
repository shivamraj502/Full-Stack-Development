// Day 12: Events → onclick, onchange, event listeners.
// 👉 Task: Button that changes background color randomly.

// Function to generate random color
function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// onclick event
document.getElementById("btn").onclick = function () {
    document.body.style.backgroundColor = randomColor();
};

// onchange event
document.getElementById("colorSelect").onchange = function () {
    document.body.style.backgroundColor = this.value;
};

// event listener
document.getElementById("btn").addEventListener("mouseover", function () {
    console.log("Mouse over button");
});
