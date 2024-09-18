let animation;
let animationCompleted = false;

// Function to load Lottie animation based on the current theme
function loadLottieAnimation() {
    const theme = sessionStorage.getItem('theme');

    const lottieFilePath = theme === 'dark'
        ? './ASSETS/LOTTIE/darkMode.json'
        : './ASSETS/LOTTIE/lightMode.json';

    if (animation) {
        animation.destroy();
    }

    animation = lottie.loadAnimation({
        container: document.getElementById('myLottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: lottieFilePath
    });

    animationCompleted = false;

    animation.addEventListener('complete', function() {
        animationCompleted = true;
    });
}

// Expose a global function to be called from darkMode.js
window.updateLottieAnimation = function() {
    loadLottieAnimation();
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
