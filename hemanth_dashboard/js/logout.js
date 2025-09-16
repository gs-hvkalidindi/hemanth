function logout() {
    // Clear tab-specific session
    sessionStorage.clear();

    // Signal other tabs to logout
    localStorage.setItem('logoutEvent', Date.now());

    // Redirect to sign-in
    window.location.href = 'signin.html';
}

// Attach logout link
document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.querySelector('#logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
});

// Listen for logout signal from other tabs
window.addEventListener('storage', function(event) {
    if (event.key === 'logoutEvent') {
        sessionStorage.clear();
        window.location.href = 'signin.html';
    }
});
