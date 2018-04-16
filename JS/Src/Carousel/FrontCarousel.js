import 'owl.carousel';
const frontCarousel = function(
	carousel,
	interval = 7500,
	autoplay = true,
	lazyload = true,
	nav = false,
	dots = false,
	hoverPause = false
) {
	const options = {
		loop: true,
		margin: 0,
		nav: nav,
		items: 1,
		autoplayHoverPause: hoverPause,
		autoplay: autoplay,
		lazyload: lazyload,
		autoplayTimeout: interval,
		dots: dots,
		navText: [
			'<i class="fa fa-lg fa-chevron-left"></i>',
			'<i class="fa fa-lg fa-chevron-right"></i>'
		]
	};
	carousel.owlCarousel(options);
};

export default frontCarousel;
