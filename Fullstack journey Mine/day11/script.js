// Day 11: DOM manipulation → getElementById, querySelector, innerHTML.
// 👉 Task: Change page text & color using JS.

function changeContent() {

    // getElementById
    let title = document.getElementById("title");
    title.innerHTML = "Text Changed Successfully";
    title.style.color = "orange"; 

    // querySelector
    let paragraph = document.querySelector(".text");
    paragraph.innerHTML = "Paragraph content updated using JavaScript.";
    paragraph.style.color = "purple";
}
