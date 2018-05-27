$(document).ready(function () {
	
	$('#feedback-email').blur(function(){
		if($(this).val() != '') {
			$(this).next().css({'transform': 'translateY(-90px)','font-size': '.5em'})
		} else {
			$(this).next().removeAttr( 'style' );
		}
	});
	
	$('.owl-carousel').owlCarousel({
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:2,
				nav:true,
				loop:false
			}
		}
	})
	
$('.service-items').animated('fadeIn','fadeOut');

});

(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);