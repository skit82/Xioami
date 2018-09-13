$(document).ready(function(){
	$('.header-menu__item--humburger').on('click', function() {
        $('.header-menu__wrraper').slideToggle(200, function(){
        	if($(this).css('display') === 'none'){
      		$(this).removeAttr('style')
        	};
    	});
	})

	$("#makeMeScrollable").smoothDivScroll({
			mousewheelScrolling: "allDirections",
			manualContinuousScrolling: true,
			autoScrollingMode: "onStart",
			hotSpotScrollingInterval: 200,
			hotSpotMouseDownSpeedBooster: 1
		});

	$(function(){
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 300);
            return false; 
        }); 
    });

	
	$(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('.footer-payment__foto--up').is(':hidden')) {
                $('.footer-payment__foto--up').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('.footer-payment__foto--up').stop(true, false).fadeOut('fast'); }
    });
    $('.footer-payment__foto--up').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 900);
	});

	$('#owl-example').owlCarousel({
		loop:true,
		navigation: true,
		pagination: true,
		singleItem: true,
		items: 1,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});
});

	