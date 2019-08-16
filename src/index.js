import './js/common'
// import './css/main.css'

// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vue'
// import Vue from 'vue'
// Vue.use();
// window.Vue = require('vue');

// import 'owl.carousel/dist/assets/owl.carousel.min.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import './scss/main.scss'

$(document).ready(function(){
    $(".dropdown-trigger").dropdown(); //activate dropdown list
    $('ul.tabs').tabs(); // dropdown nav

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        dragged: true
    });
    autoplay()
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
});