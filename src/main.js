import $ from 'jquery'
import 'slick-carousel';
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
})
