// auth.js - session-based access control

// Redirect to signin if not logged in
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "signin.html";
}

// After DOM loads, update UI with logged-in user details
document.addEventListener("DOMContentLoaded", () => {
    const firstName = sessionStorage.getItem("firstName") || "";
    const lastName = sessionStorage.getItem("lastName") || "";
    const email = sessionStorage.getItem("userEmail") || "";

    // Replace placeholders with user info if elements exist
    const userNameSpan = document.getElementById("userName");
    if (userNameSpan) {
        userNameSpan.textContent = `${firstName} ${lastName}`.trim();
    }

    const userEmailSpan = document.getElementById("userEmail");
    if (userEmailSpan) {
        userEmailSpan.textContent = email;
    }
});

// Logout function (attach to button onclick="logout()")
function logout() {
    sessionStorage.clear();  // clears all login data
    window.location.href = "signin.html";
}
