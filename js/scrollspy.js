function fixmetotop() {
  var fixmeTop = $('.table-of-contents').offset().top;
  $(window).scroll(function() {
    //aktuelle Scrollposition auslesen
    var currentScroll = $(window).scrollTop(),
    //+1em rechnen
    currentScroll = currentScroll + 15,
    actualBottom = $('#bodybox').offset().top + $('#bodybox').outerHeight(true),
    heightSideNav = $('.table-of-contents').outerHeight(true);
    if (currentScroll >= fixmeTop && currentScroll <= actualBottom - heightSideNav) {
      //CSS für fixed setzen
      $('.table-of-contents').css({
        position: 'fixed',
        top: '0',
        bottom: ''
      });
    } else {
      if(currentScroll >= actualBottom - heightSideNav) {
        $('.table-of-contents').css({
          position: 'fixed',
          bottom: '0',
          top: ''
        });
      } else {
        //CSS für nicht fixed setzen
        $('.table-of-contents').css({
          position: 'static',
          bottom: '',
          top: ''
        });
      }
    }
  });
}
$(document).ready(function () {
  var fillLorepIpsum = function () {
    for (var i = 0; i < 1000; i++) {
      $("#loremIpsum1").append("content1 ");
      $("#loremIpsum2").append("content2 ");
      $("#loremIpsum3").append("content3 ");
    }
  }
  fillLorepIpsum();
  fixmetotop();
  $('.scrollspy').scrollSpy();
});
