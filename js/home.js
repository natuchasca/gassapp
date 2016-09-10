/* =======================================
* HOME JS 
* =======================================
*/
$(document).ready(function() {
	// Carousel Testomoios - Owl carousel
	//-----------------------------------------------
	if ($('.owl-carousel').length>0) {
		$(".owl-carousel.carousel").owlCarousel({
			items: 4,
			pagination: false,
			navigation: true,
			navigationText: false
		});
		$(".owl-carousel.carousel-autoplay").owlCarousel({
			items: 4,
			autoPlay: 5000,
			pagination: false,
			navigation: true,
			navigationText: false
		});
		$(".owl-carousel.clients").owlCarousel({
			items: 6,
			autoPlay: true,
			pagination: false,
			itemsDesktopSmall: [992,4],
			itemsTablet: [768,4],
			itemsMobile: [479,3]
		});
		$(".owl-carousel.content-slider").owlCarousel({
			singleItem: true,
			autoPlay: 5000,
			navigation: false,
			navigationText: false,
			pagination: false
		});
		$(".owl-carousel.content-slider-with-controls").owlCarousel({
			singleItem: true,
			autoPlay: false,
			navigation: true,
			pagination: true
		});
		$(".owl-carousel.content-slider-with-large-controls").owlCarousel({
			singleItem: true,
			autoPlay: false,
			navigation: true,
			pagination: true
		});
		$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
			singleItem: true,
			autoPlay: 5000,
			navigation: true,
			pagination: true
		});
		$(".owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
			singleItem: true,
			autoPlay: 5000,
			navigation: true,
			pagination: true
		});
		$(".owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
			singleItem: true,
			autoPlay: 5000,
			navigation: true,
			pagination: true,
			stopOnHover: true
		});
	};
});