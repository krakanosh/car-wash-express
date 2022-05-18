$(function () {
    $('.rev-slider').slick({
	infinite: true,
	dots: true,
	arrow: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2200,
	speed: 1500,
	appendArrows: '.rev-slider_arrow',
	appendDots: '.rev-slider_dots',
	prevArrow: '<div class="rev-slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"</svg></div>',
	nextArrow: '<div class="rev-slick-next"><svg width="18" height="37" viewBox="0 0 18 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.98662 36.4363C3.37084 36.4377 3.75048 36.3529 4.09763 36.1884C4.44478 36.0239 4.75063 35.7837 4.99269 35.4856L17.4149 20.0677C17.7932 19.6079 18 19.0311 18 18.4359C18 17.8407 17.7932 17.264 17.4149 16.8042L4.55547 1.3863C4.11892 0.861535 3.49161 0.531529 2.81153 0.468881C2.13145 0.406234 1.45432 0.616077 0.929102 1.05225C0.403877 1.48841 0.0735855 2.11518 0.0108833 2.79467C-0.0518188 3.47415 0.158205 4.15069 0.594755 4.67545L12.0911 18.4488L0.980539 32.2221C0.66604 32.5993 0.466265 33.0586 0.404848 33.5457C0.343433 34.0328 0.422947 34.5272 0.633987 34.9706C0.845026 35.4139 1.17875 35.7875 1.59568 36.0473C2.01261 36.3071 2.4953 36.4421 2.98662 36.4363Z" fill="#9CA4A7"/></svg></div>',
	responsive: [
        {
		breakpoint: 1600,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 2
		}
	},
        {
		breakpoint: 1086,
	settings: {
            slidesToShow: 1,
			slidesToScroll: 1
		}
	},
        {
		breakpoint: 768,
	settings: {
            slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 425,
	settings: {
            slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	]
    })
});