
const primaryNav = document.querySelector('.primary-navigation');
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () =>
{
    const visibility = primaryNav.getAttribute('data-visible');
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        menuBtn.classList.add('btn-active'); // Add class for active state
        menuOpen = true;
        primaryNav.setAttribute('data-visible', true);
    }
    else
    {
        menuBtn.classList.remove('open');
        menuBtn.classList.remove('btn-active'); // Remove class for active state
        menuOpen = false;
        primaryNav.setAttribute('data-visible', false); 
    }
});