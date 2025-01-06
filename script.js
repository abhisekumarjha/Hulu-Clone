const toUpButton = document.querySelector('.toup');
const header = document.querySelector('header');

// Function to check the scroll position and toggle the button

function checkScrollPosition() {
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        toUpButton.style.display = 'block';
    } else {
        toUpButton.style.display = 'none';
    }
}

window.addEventListener('scroll', checkScrollPosition);

toUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




// pre-loader

const preloader = document.querySelector('#preloader');
const app = document.querySelector('#app');

app.style.display = 'none';

setTimeout(() => {
    preloader.style.display = 'none'
    app.style.display = 'block';
}, 1500);




// <!-- /* --- About me JS code ---*/ -->

const currYearText = document.querySelector('.about-me-currYear');
const currYear = new Date().getFullYear();

currYearText.textContent = currYear;


// <!-- /* --- About me JS code ends here ---*/ -->