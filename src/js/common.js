$(document).ready(function () {
	
	$('#contact-mail').blur(function(){
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
	
	//  showAnimate('#service-animate', 'fadeInLeft', '2s', 20);

	//  function showAnimate(block, nameAnimation, durationAnimate, borderShow) {

	//  var windowHeight = $(window).height();
	//  $(document).on('scroll', function() {
	//  	$(block).each(function() {
	//  		var self = $(this),
	//  		height = self.offset().top + borderShow;
	//  		if ($(document).scrollTop() + windowHeight >= height) {
	//  			self.addClass(nameAnimation).css({'animation-duration': durationAnimate})
	//  		}
	//  	});
	//  });
	//  }
	
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
	
	$('.portfolio-item').hover(function () {
		$(this).parent().parent().addClass('hov-scale-fix');
	}, function () {
		$(this).parent().parent().removeClass('hov-scale-fix');
	}
);

$('.popup-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-with-zoom',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  },
	tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title');
		}
	}
});

$('#contact-form').submit(function(e){
	e.preventDefault();
	AjaxFormRequest('messegeResult-contact-form','contact-form','./contact-form.php');
});

function AjaxFormRequest(result_id,formMain,url) { 
    jQuery.ajax({ 
        url: url, 
        type: "POST", 
        dataType: "html", 
        data: jQuery("#"+formMain).serialize(), 
        success: function(response) { 
            document.getElementById(result_id).innerHTML = response; 
            $(':input','#'+formMain) 
            .not(':button, :submit, :reset, :hidden') 
            .val('') 
            .removeAttr('checked') 
            .removeAttr('selected');
        }, 
        error: function(response) { 
            $('.m-0').remove();
            var par = document.getElementById(result_id);
            var error = document.createElement('p');
            error.classList.add("m-0");
            error.innerHTML = "Возникла ошибка :(";
            par.appendChild(error);
        }
    }); 
}

});
