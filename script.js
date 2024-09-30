function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.toggle-theme');

    body.classList.toggle('theme-dark');
    body.classList.toggle('theme-light');

    // Changer le texte du bouton
    if (body.classList.contains('theme-dark')) {
        themeButton.textContent = "Mode Clair";
    } else {
        themeButton.textContent = "Mode Sombre";
    }
}
