document.addEventListener('DOMContentLoaded', function () {
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim();

    const sidebarName = document.getElementById('sidebar-name');
    const navbarName = document.getElementById('navbar-name');

    if (sidebarName) sidebarName.textContent = fullName;
    if (navbarName) navbarName.textContent = fullName;
});
