const animation = lottie.loadAnimation({
    container: document.getElementById('myLottie'),                             // the DOM element
    renderer: 'svg',                                                            // render type (canvas, svg, or html)
    loop: false,                                                                // whether the animation should loop
    autoplay: true,                                                             // set to false to disable autoplay
    path: './ASSETS/LOTTIE/lightMode.json'                                      // your Lottie file path
  });

  // Flag to track animation completion

  let animationCompleted = false;

  // Add click event to play animation

  document.getElementById('myLottie').addEventListener('click', function() {
    if (animationCompleted) {
      animation.goToAndPlay(0, true);                                           // Play from the beginning
      animationCompleted = false;                                               // Reset the flag for the next time
    }
  });

  // Handle animation completion

  animation.addEventListener('complete', function() {
    animationCompleted = true;                                                 // Set flag to allow click interaction
  });