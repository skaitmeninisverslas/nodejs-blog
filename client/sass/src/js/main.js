import Swiper from './vendors/swiper.min';

$(document).ready(function () {
	initHeaderSlider();
});

var mediaBreakpointDown = 992;

// INIT PROJECTS SWIPER
function initHeaderSlider() {
	var mySwiper = new Swiper('.HEADER__slider', {
		speed: 1000,
		slidesPerView: 1,
		loop: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
		},
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
}