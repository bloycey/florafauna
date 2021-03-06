$(document).ready(function() {
	/* Enable hover on menu if screen is over 992 pixels - otherwise menus must be clicked (for phones) */
	if ($(window).width() >= 992) {
		$(".dropdown").hover(function() {
			$('.dropdown-menu', this).stop().fadeIn("fast");
		}, function() {
			$('.dropdown-menu', this).stop().fadeOut("fast");
		});
	}
	/* Slider Settings*/
	$('.bxslider').bxSlider({
		auto: true,
		infinite: true,
		pager: false,
		speed: 1000,
	});
	$('.bxslider-why-shop').bxSlider({
		minSlides: 1,
		maxSlides: 2,
		slideWidth: 320,
		slideMargin: 10,
		pager: false,
		auto: true,
		infitnite: true,
		speed: 1200,
	});
	$('.bxslider-featured-brands').bxSlider({
		minSlides: 1,
		maxSlides: 6,
		slideWidth: 150,
		slideMargin: 5,
		pager: false,
		auto: true,
		infitnite: true,
		speed: 500,
	});
});