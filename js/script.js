$(document).ready(function(){

	$('.nuestrosProductos a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.nuestrosProductos a').removeClass('current');

		$(this).addClass('current');
	});

    setInterval('swapImages()', 5000);
	setInterval('swapImages2()', 3000);
	setInterval('swapImages3()', 3500);

    $("#buttonContactSend").on("click", function () {
        // e.preventDefault();
        var inputData = document.getElementById('contact-form');
        var userData = {
            userName: inputData.getElementsByTagName('input').userName.value,
            userPhone: inputData.getElementsByTagName('input').userPhone.value,
            userMail: inputData.getElementsByTagName('input').userMail.value,
            userComment: inputData.getElementsByTagName('textarea').userComment.value
        };

        $.ajax({
            type: "POST",
            url: "./enviar.php",
            data: {userData: JSON.stringify(userData)},
            success: function () {
                $('.modal-title-messages').html('<strong>¡Éxito!</strong>');
                $('.modal-body-messages').html('<p>Hemos recibido exitosamente su comentario, en breves instantes nos comunicaremos con usted.</p>');
                $('.modal-footer-messages').html('<button type="button" class="btn btn-success" data-dismiss="modal">Continuar</button>');
                $("#modalMessages").modal('toggle');
            },
            error: function () {
                $('.modal-title-messages').html('<strong>¡Error!</strong>');
                $('.modal-body-messages').html('<p>Ha ocurrido un error. Por favor vuelva a intentarlo más tarde.</p>');
                $('.modal-footer-messages').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>');
                $("#modalMessages").modal('toggle');
            }
        });
    });

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