// $(function () {
// 	$('.header-slider').slick({
// 		infinite: true,
// 		dots: true,
// 		autoplay: true,
// 		autoplaySpeed: 2200,
// 		speed: 1500,
// 	});

// });

$(function () {
    $('.header-slider').slick({
	infinite: true,
	dots: true,
	arrow: false,
	autoplay: true,
	autoplaySpeed: 2200,
	speed: 1500,
	//appendArrows: '.slider_arrow',
	//appendDots: '.slider_dots',
	// prevArrow: '<div class="slick-prev"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.16" d="M9.15764 18.8488C9.62644 19.3173 10.3862 19.317 10.8547 18.8482C11.3232 18.3794 11.3229 17.6196 10.8541 17.1512L9.15764 18.8488ZM2.07076 10.0707L2.91898 9.2219L2.91897 9.22189L2.07076 10.0707ZM2.07076 9.92926L1.22255 9.08042L1.22254 9.08043L2.07076 9.92926ZM10.8541 2.84884C11.3229 2.38038 11.3232 1.62059 10.8547 1.15178C10.3862 0.682983 9.62644 0.682703 9.15764 1.15116L10.8541 2.84884ZM10.8541 17.1512L2.91898 9.2219L1.22255 10.9196L9.15764 18.8488L10.8541 17.1512ZM2.91898 10.7781L10.8541 2.84884L9.15764 1.15116L1.22255 9.08042L2.91898 10.7781ZM2.91897 9.22189C3.34894 9.65154 3.34893 10.3485 2.91898 10.7781L1.22254 9.08043C0.714417 9.58819 0.71441 10.4118 1.22255 10.9196L2.91897 9.22189Z" fill="#484848"/></svg></svg></div>',
	// nextArrow: '<div class="slick-next"><svg width="18" height="37" viewBox="0 0 18 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.98662 36.4363C3.37084 36.4377 3.75048 36.3529 4.09763 36.1884C4.44478 36.0239 4.75063 35.7837 4.99269 35.4856L17.4149 20.0677C17.7932 19.6079 18 19.0311 18 18.4359C18 17.8407 17.7932 17.264 17.4149 16.8042L4.55547 1.3863C4.11892 0.861535 3.49161 0.531529 2.81153 0.468881C2.13145 0.406234 1.45432 0.616077 0.929102 1.05225C0.403877 1.48841 0.0735855 2.11518 0.0108833 2.79467C-0.0518188 3.47415 0.158205 4.15069 0.594755 4.67545L12.0911 18.4488L0.980539 32.2221C0.66604 32.5993 0.466265 33.0586 0.404848 33.5457C0.343433 34.0328 0.422947 34.5272 0.633987 34.9706C0.845026 35.4139 1.17875 35.7875 1.59568 36.0473C2.01261 36.3071 2.4953 36.4421 2.98662 36.4363Z" fill="#9CA4A7"/></svg></div>',
		responsive: [
{
breakpoint: 426,
settings: "unslick"
}
]
    })
});

$(function () {
    $('.rev-slider').slick({
	infinite: true,
	dots: true,
	arrow: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
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