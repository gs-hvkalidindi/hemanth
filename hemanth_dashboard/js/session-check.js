// session-check.js
document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "signin.html";
    }
});
