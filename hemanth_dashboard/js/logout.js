// logout.js

function clearAllCookies() {
    // Clear all client-side cookies
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.trim().split("=")[0] + 
            "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    });
}

function logout() {
    // Clear storages
    localStorage.clear();
    sessionStorage.clear();

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

    // Sync logout across multiple tabs
    localStorage.setItem("logoutEvent", Date.now());

    // Redirect to signin
    window.location.href = "signin.html";
}

// Add listener to logout link/button
document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.querySelector("#logout-link");

    if (logoutLink) {
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault();
            logout();
        });
    }
});
