const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Toggle the theme
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
