$(document).ready(function () {
	
	$('#feedback-email').blur(function(){
		if($(this).val() != '') {
			$(this).next().css({'transform': 'translateY(-90px)','font-size': '.5em'})
		} else {
			$(this).next().removeAttr( 'style' );
		}
	});
	
	$('.owl-carousel-1').owlCarousel({
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:2,
				nav:true
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	})

	
	
	// var windowHeight = $(window).height();
	// $(document).on('scroll', function() {
	// 	$('#service-animate').each(function() {
	// 		var self = $(this),
	// 		height = self.offset().top;
	// 		if ($(document).scrollTop() + windowHeight >= height) {
	// 			self.addClass('fadeInLeft').css({'animation-duration':'2s'})
	// 		}
	// 	});
	// });
	
	
	// mobile menu
	var touch = $('#touch-menu');
	var menu = $('.top-nav');
	
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});

});
