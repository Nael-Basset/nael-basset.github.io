function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('theme-dark');
    body.classList.toggle('theme-light');
}

