window.addEventListener('load', function() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'signin.html';
    }
});

// Optional: Listen for cross-tab logout
window.addEventListener('storage', function(event) {
    if (event.key === 'logoutEvent') {
        sessionStorage.clear();
        window.location.href = 'signin.html';
    }
});
