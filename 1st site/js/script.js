$(function () {
	$(".link").magnificPopup();
	$(document).ready(function () {

		$('.ptf1').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'ptf1',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}

		});

		$('.image-popup-fit-width').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		$('.image-popup-no-margins').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});


	})


	$(document).ready(function () {
		$('.product__image').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>Denis Novik</small>';
				}
			}
		});
	});

});

$('.menu__btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn-active');
	$('.menu__item').toggleClass('menu-item-active');
	$('.content').toggleClass('content-active')
})
