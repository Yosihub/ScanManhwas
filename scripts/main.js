function toggleDarkMode() {
    const darkModeStylesheet = document.getElementById('dark-mode');
    if (darkModeStylesheet.disabled) {
        darkModeStylesheet.disabled = false;
    } else {
        darkModeStylesheet.disabled = true;
    }
}
