// session-check.js
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "signin.html";
    }
});

// Listen for logout in other tabs
window.addEventListener("storage", function(event) {
    if (event.key === "loggedIn" && event.newValue !== "true") {
        window.location.href = "signin.html";
    }
});
