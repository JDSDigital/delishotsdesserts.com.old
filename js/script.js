/*$('.product-nav').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});*/

$(function() {
  $('.product-nav').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){

	$('.nuestrosProductos a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.nuestrosProductos a').removeClass('current');

		$(this).addClass('current');
	})

})

$(".nuestrosProductos").stikify({rate: 3.4, cieling: -100});