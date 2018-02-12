import $ from 'jquery'
import 'slick-carousel';
import ScrollReveal from 'scrollreveal';
import './scss/_main.scss';



$(document).ready(function(params) {
    // Initialize slick slider for Testimonials
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'testimonials__nav__dots',
        infinite: true, 
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Toggle full screen navingation on/off
    $('.hamburger').click(function(e) {
        if($('.navigation-overlay').hasClass('navigation-overlay--is-open')) {
            $('.navigation-overlay').removeClass('navigation-overlay--is-open');
            $('html').removeClass('no-scroll');
        }
        else {
            $('.navigation-overlay').addClass('navigation-overlay--is-open');
            $('html').addClass('no-scroll');
        }
    });


    // Scrolling animation triggers
    const sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 1000,
        origin: 'top',
        scale: 1,
    });

    sr.reveal('.hero h1', {
        duration: 1000,
        origin: 'top',
        scale: 1,
        delay: 800
    });

    sr.reveal('.hero h2', {
        duration: 1000,
        origin: 'top',
        scale: 1,
        delay: 1200
    });

    sr.reveal('.about__card', {
        duration: 1000,
        origin: 'top',
        scale: 1,
    });

    sr.reveal('.about__feature', {
        duration: 1000,
        origin: 'bottom',
        scale: 1,
    }, 300);

    sr.reveal('.social__col-left', {
        duration: 1000,
        origin: 'left',
        scale: 1,
    });

    sr.reveal('.social__col-right', {
        duration: 1000,
        origin: 'right',
        scale: 1,
        delay: 400
    });
})
