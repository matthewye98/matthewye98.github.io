(function($){
	$(function(){
		M.AutoInit();

		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('select').material_select();
		$('.modal-trigger').leanModal();
      $(".button-collapse").sideNav();

		   $('.scrollspy').scrollSpy();
			 $('.pushpin').pushpin();



					// Floating-Fixed table of contents

					      if ($('nav').length) {
					        console.log('Nav pushpin', $('nav').height());
					        $('.toc-wrapper').pushpin({
					          top: $('.small-section').height()+100,
					          bottom: 50000
					        });
					      } else if ($('#index-banner').length) {
					        $('.toc-wrapper').pushpin({
										top: $('.small-section').height(),
					          bottom: 0
					        });
					      } else {
					        $('.toc-wrapper').pushpin({
					          top: 0,
					          bottom: 5000
					        });
					      }
	}); // end of document ready
})(jQuery); // end of jQuery name space
