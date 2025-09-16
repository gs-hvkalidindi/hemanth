// user-display.js

function getUserFullName() {
    const firstName = localStorage.getItem('firstName') || sessionStorage.getItem('firstName') || 'John';
    const lastName = localStorage.getItem('lastName') || sessionStorage.getItem('lastName') || 'Doe';
    return `${firstName} ${lastName}`;
}

function updateUserNames() {
    const fullName = getUserFullName();

    // Navbar dropdown
    const navDropdown = document.querySelector('.nav-item.dropdown > a span.d-none.d-lg-inline-flex');
    if (navDropdown) navDropdown.textContent = fullName;

    // Sidebar .ms-3 divs
    const sidebarNameDivs = document.querySelectorAll('.sidebar .ms-3 h6');
    sidebarNameDivs.forEach(div => div.textContent = fullName);

    // Recent sales table names
    const tableNames = document.querySelectorAll('tbody tr td:nth-child(4)');
    tableNames.forEach(td => {
        if (td.textContent.trim() === 'Jhon Doe') td.textContent = fullName;
    });

    // Messages names
    const messageNames = document.querySelectorAll('.h-100 .d-flex.w-100.justify-content-between h6.mb-0');
    messageNames.forEach(h6 => {
        if (h6.textContent.includes('Jhon Doe')) h6.textContent = fullName;
    });
}

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', updateUserNames);

// Listen to storage changes (cross-tab login/logout)
window.addEventListener('storage', function(event) {
    if (event.key === 'firstName' || event.key === 'lastName' || event.key === 'logoutEvent') {
        updateUserNames();
    }
});
