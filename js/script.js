$(document).ready(function(){

	$('.nuestrosProductos a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.nuestrosProductos a').removeClass('current');

		$(this).addClass('current');
	});

    $(".sidebar").stick_in_parent();

    setInterval('swapImages()', 5000);
	setInterval('swapImages2()', 3000);
	setInterval('swapImages3()', 3500);

});

function swapImages(){
    var $active = $('#myGallery .active');
    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}

function swapImages2(){
    var $active = $('#thumbsShots .active');
    var $next = ($('#thumbsShots .active').next().length > 0) ? $('#thumbsShots .active').next() : $('#thumbsShots img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}

function swapImages3(){
    var $active = $('#thumbsEvents .active');
    var $next = ($('#thumbsEvents .active').next().length > 0) ? $('#thumbsEvents .active').next() : $('#thumbsEvents img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}

// $(function() {
//   $('.product-nav').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 500);
//         return false;
//       }
//     }
//   });
// });
//
// $.fn.moveIt = function(){
//   var $window = $(window);
//   var instances = [];
//
//   $(this).each(function(){
//     instances.push(new moveItItem($(this)));
//   });
//
//   window.onscroll = function(){
//     var scrollTop = $window.scrollTop();
//     instances.forEach(function(inst){
//       inst.update(scrollTop);
//     });
//   }
// }
//
// var moveItItem = function(el){
//   this.el = $(el);
//   this.speed = parseInt(this.el.attr('data-scroll-speed'));
// };
//
// moveItItem.prototype.update = function(scrollTop){
//   var pos = scrollTop / this.speed;
//   this.el.css('transform', 'translateY(' + -pos + 'px)');
// };
//
// $(function(){
//   $('[data-scroll-speed]').moveIt();
// });
