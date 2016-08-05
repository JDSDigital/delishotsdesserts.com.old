$(document).ready(function(){

	$('.nuestrosProductos a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.nuestrosProductos a').removeClass('current');

		$(this).addClass('current');
	})

  setInterval('swapImages()', 5000);

})

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

$(".nuestrosProductos").stikify({rate: 3.4, cieling: -100});

function swapImages(){
    var $active = $('#myGallery .active');
    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}
