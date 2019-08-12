import './js/common'
// import './css/main.css'
import './scss/main.scss'

// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import 'vue'
// import Vue from 'vue'
// Vue.use();
// window.Vue = require('vue');


import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({

        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        dotsEach: true,dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        nav: true,
        responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }


    });
});