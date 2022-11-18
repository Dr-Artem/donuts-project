$(document).ready(function(){
	$(".slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		focusOnSelect: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000,
		asNavFor: ".slidertext",
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			}
    	}]
	});
	$(".slidertext").slick({
		dots: true,
		infinite: true,
		asNavFor: ".slider",
	})
});