document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Clear logged-in state from sessionStorage
            sessionStorage.removeItem("loggedIn");

            // Redirect to the login page
            window.location.href = "signin.html";
        });
    }
});
