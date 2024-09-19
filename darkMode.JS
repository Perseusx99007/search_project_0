// Function to apply the correct theme based on session storage or system preference
function applyTheme() {
    // Check session storage for saved theme preference
    const savedTheme = sessionStorage.getItem('theme');
    
    if (savedTheme) {
        // Apply saved theme
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true; // Sync the checkbox with the saved theme
            console.log('Dark mode enabled (session storage)');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false; // Sync the checkbox with the saved theme
            console.log('Dark mode disabled (session storage)');
        }
    } else {
        // Apply the theme based on system preference if no saved preference
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log('Prefers dark scheme:', prefersDarkScheme);

        if (prefersDarkScheme) {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true; // Sync the checkbox with the system preference
            console.log('Dark mode enabled (system preference)');
            sessionStorage.setItem('theme', 'dark'); // Save the system preference
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false; // Sync the checkbox with the system preference
            console.log('Dark mode disabled (system preference)');
            sessionStorage.setItem('theme', 'light'); // Save the system preference
        }
    }
}

// Select the theme toggle checkbox
const themeToggle = document.getElementById('themeToggle');

// Apply theme based on user preference or system preference when the page loads
applyTheme();

// Toggle dark mode when checkbox changes
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        sessionStorage.setItem('theme', 'dark'); // Save the theme preference to session storage
        console.log('Dark mode enabled (user toggle)');
    } else {
        document.body.classList.remove('dark-mode');
        sessionStorage.setItem('theme', 'light'); // Save the theme preference to session storage
        console.log('Dark mode disabled (user toggle)');
    }

    // Call function to update Lottie animation
    if (window.updateLottieAnimation) {
        window.updateLottieAnimation();
    }
});
