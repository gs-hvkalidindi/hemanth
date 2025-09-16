// logout.js

function clearAllCookies() {
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.trim().split("=")[0] +
            "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    });
}

function logout() {
    // Clear storages
    localStorage.removeItem("loggedIn");
    sessionStorage.clear();
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");

    // Clear cookies
    clearAllCookies();

    // Reset Gainsight PX session if loaded
    if (typeof aptrinsic !== "undefined") {
        try {
            aptrinsic("reset");
        } catch (e) {
            console.warn("PX reset failed:", e);
        }
    }

    // Broadcast logout only when user clicks logout
    localStorage.setItem("logoutEvent", Date.now());

    // Redirect
    window.location.href = "signin.html";
}

// Attach logout handler to button/link
document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.querySelector("#logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault();
            logout();
        });
    }
});

// Listen for logout in other tabs
window.addEventListener("storage", function(event) {
    if (event.key === "logoutEvent") {
        window.location.href = "signin.html";
    }
});
