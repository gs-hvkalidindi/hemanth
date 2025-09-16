document.addEventListener('DOMContentLoaded', function () {
    // Get user info from localStorage
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim() || 'John Doe';

    // Update sidebar
    const sidebarName = document.getElementById('sidebar-name');
    if (sidebarName) sidebarName.textContent = fullName;

    // Update navbar
    const navbarName = document.getElementById('navbar-name');
    if (navbarName) navbarName.textContent = fullName;

    // Update any table or message placeholders (replace all occurrences of "Jhon Doe")
    const placeholders = document.querySelectorAll('td, h6, span');
    placeholders.forEach(el => {
        if (el.textContent.includes('Jhon Doe')) {
            el.textContent = el.textContent.replace(/Jhon Doe/g, fullName);
        }
    });
});
