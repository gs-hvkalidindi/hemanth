document.addEventListener('DOMContentLoaded', function () {
    // Get user info from localStorage first, fallback to sessionStorage
    const firstName = localStorage.getItem('firstName') || sessionStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || sessionStorage.getItem('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim() || 'John Doe';

    // Update all nav-item dropdown user names
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(el => {
        const span = el.querySelector('span');
        if (span && span.textContent.includes('John Doe')) {
            span.textContent = fullName;
        }
    });

    // Update all ms-3 divs (sidebar or message sections)
    const ms3Divs = document.querySelectorAll('.ms-3');
    ms3Divs.forEach(el => {
        if (el.textContent.includes('Jhon Doe')) {
            el.textContent = el.textContent.replace(/Jhon Doe/g, fullName);
        }
    });
});
