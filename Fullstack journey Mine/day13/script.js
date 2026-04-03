// Day 13: Form validation basics.
// 👉 Task: Validate email & password fields.

document.getElementById("myForm").addEventListener("submit", function(event) {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.innerHTML = "Invalid email format";
        message.style.color = "red";
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters";
        message.style.color = "red";
        event.preventDefault();
        return;
    }

    message.innerHTML = "Form submitted successfully";
    message.style.color = "green";
});
