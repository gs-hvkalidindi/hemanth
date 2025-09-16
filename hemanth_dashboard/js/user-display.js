// user-display.js

function checkLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'signin.html';
    } else {
        displayUserName();
    }
}

function displayUserName() {
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const fullName = `${firstName} ${lastName}`;

    // Replace navbar name
    const navName = document.querySelector('.nav-item .d-none.d-lg-inline-flex');
    if (navName) navName.textContent = fullName;

    // Replace sidebar name
    const sidebarName = document.querySelector('.sidebar .ms-3 h6.mb-0');
    if (sidebarName) sidebarName.textContent = fullName;
}

// Listen for logout in other tabs
window.addEventListener('storage', function(event) {
    if (event.key === 'logout-event') {
        window.location.href = 'signin.html';
    }
});

// Run on page load
window.addEventListener('load', checkLogin);
