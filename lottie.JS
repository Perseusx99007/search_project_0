let animation;
let animationCompleted = false;

// Function to load Lottie animation based on the current theme
function loadLottieAnimation() {
    const theme = sessionStorage.getItem('theme');// Get the current theme from sessionStorage

    const lottieFilePath = theme === 'dark'
        ? './ASSETS/LOTTIE/darkMode.json'
        : './ASSETS/LOTTIE/lightMode.json';

    if (animation) {
        animation.destroy();// Destroy the previous animation instance
    }

    // Load the new Lottie animation based on the current theme
    animation = lottie.loadAnimation({
        container: document.getElementById('myLottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: lottieFilePath
    });

    animationCompleted = false;// Reset the animation completion flag

    animation.addEventListener('complete', function() {
        animationCompleted = true;// Set the animation completion flag when the animation is completed
    });
}

// Expose a global function to be called from darkMode.js
window.updateLottieAnimation = function() {
    loadLottieAnimation();// Reload the Lottie animation based on the updated theme
};

// Initialize the Lottie animation on page load based on the current theme
loadLottieAnimation();

// Play the animation when clicked
document.getElementById('myLottie').addEventListener('click', function() {
    if (animationCompleted) {
        animation.goToAndPlay(0, true);
        animationCompleted = false;
    }
});
