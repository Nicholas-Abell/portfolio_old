const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -140px 0px',
};

const appearOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var isInViewport = function (elem, className) {
    var bounding = elem.getBoundingClientRect();
    if (elem.classList.contains(className)) {
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

//Navbar
var icons = document.querySelectorAll('.navbar__icon');
var marker = document.querySelectorAll('.marker');
var headerIcon = document.getElementById('home-btn');
var profileIcon = document.getElementById('profile-btn');
var skillIcon = document.getElementById('skill-btn');
var projectIcon = document.getElementById('projects-btn');
var constactIcon = document.getElementById('contact-btn');
var active = "navbar__icon--active";

window.addEventListener('scroll', function (event) {
    marker.forEach(marker => {
        if (window.scrollY == 0 || isInViewport(marker, "title-card-home")) {
            icons.forEach(active => active.classList.remove('navbar__icon--active'));
            headerIcon.classList.add(active);
        }
        if (isInViewport(marker, "about-me__title-card")) {
            icons.forEach(active => active.classList.remove('navbar__icon--active'));
            profileIcon.classList.add(active);
        }
        if (isInViewport(marker, "carousel__title")) {
            icons.forEach(active => active.classList.remove('navbar__icon--active'));
            projectIcon.classList.add(active);
        }
        if (isInViewport(marker, "skill-info__title-card")) {
            icons.forEach(active => active.classList.remove('navbar__icon--active'));
            skillIcon.classList.add(active);
        }
        if (isInViewport(marker, "contact-section__title")) {
            icons.forEach(active => active.classList.remove('navbar__icon--active'));
            constactIcon.classList.add(active);
        }
    });
}, false);

function scrollToElementCentered(className) {
    document.querySelector(className).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}
function scrollToElement(className) {
    document.querySelector(className).scrollIntoView({
        behavior: 'smooth',
    });
}

//Carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nav = document.querySelector('.carousel__nav');
const dots = document.querySelectorAll('.carousel-nav__dot')
const carousel = document.querySelector('.carousel');
const carouselSlide = document.querySelector('.carousel__slide');
let slideIndex = 0;
let carouselTimer = setTimeout(showSlides, 3000);

function showSlides(n) {

    let i;
    let slides = Array.from(track.children);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
        dots[i].classList.remove('carousel-nav__dot--active');
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 };
    slides[slideIndex - 1].style.opacity = '100';
    dots[slideIndex - 1].classList.add('carousel-nav__dot--active');
    carouselTimer = setTimeout(showSlides, 3500);
};

function slideSelect(n) {
    showSlides(slideIndex = n);
};

function carouselMouseOver() {
    clearTimeout(carouselTimer);
};

function carouselMouseLeave() {
    carouselTimer = setTimeout(showSlides, 3500);
};
