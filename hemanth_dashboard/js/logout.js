// logout.js

// Function to handle logout
function logout() {
    // Clear session storage
    sessionStorage.removeItem('loggedIn');
    // Redirect to sign-in page
    window.location.href = 'signin.html';
}

// Add event listener to logout link/button
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have a logout link in your navbar dropdown
    const logoutLink = document.querySelector('#logout-link');

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            logout(); // Call logout function
        });
    }
});
