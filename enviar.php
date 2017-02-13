<!DOCTYPE html>
<html>
<head>
    <meta name="robots" content="noindex">
    <meta name="description" content="Empresa dedicada a la elaboración casera de postres para eventos, fiestas, mayor y detal en la zona de Caracas."/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DELISHOTS & DESSERTS</title>
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./css/hover.css"/>
    <link rel="stylesheet" type="text/css" href="./css/styles.css"/>
    <link rel="shortcut icon" type="image/png" href="./img/favicon.png">
    <script src="./js/jquery-2.2.4.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Raleway:400,400i|Oxygen" rel="stylesheet">
</head>
<body class="body">
<div class="container">

	<div class="row">
		<div class="col-md-2 pr0">
			<header>
				<a href="./index.html" class="hvr-ripple-out"><img id="logo-banner" class="img-responsive" src="./img/logo.png" /></a>
			</header>
			<nav id="top-menu" class="hidden-xs hidden-sm">
				<ul>
					<li class=""><a class="hvr-wobble-top" href="./index.html">Inicio</a></li>
					<li class=""><a class="hvr-wobble-top" href="./about.html">Quienes Somos</a></li>
					<li class=""><a class="hvr-wobble-top" href="./nuestros_productos.html">Nuestros Productos</a></li>
					<!-- <li class=""><a class="hvr-wobble-top" href="./opcion.html">Escoge tu Mejor Opción</a></li> -->
					<li class=""><a class="hvr-wobble-top" href="./galeria.html">Galería</a></li>
					<li class=""><a class="hvr-wobble-top active" href="./contactanos.html">Contáctanos</a></li>
				</ul>
			</nav>
			<nav class="hidden-lg hidden-md top-menu-xs">
				<ul>
					<li class=""><a class="hvr-wobble-top" href="./index.html">Inicio</a></li>
					<li class=""><a class="hvr-wobble-top" href="./about.html">Quienes Somos</a></li>
					<li class=""><a class="hvr-wobble-top" href="./nuestros_productos.html">Nuestros Productos</a></li>
					<!-- <li class=""><a class="hvr-wobble-top" href="./opcion.html">Escoge tu Mejor Opción</a></li> -->
					<li class=""><a class="hvr-wobble-top" href="./galeria.html">Galería</a></li>
					<li class=""><a class="hvr-wobble-top active" href="./contactanos.html">Contáctanos</a></li>
				</ul>
			</nav>
		</div>
		<div class="col-md-9 col-padding">
			<main id="main-index">

				<h1>Contáctanos</h1>

				<div class="row contact">

					<div class="col-sm-10 col-sm-offset-1 contact-data">
						<div class="row">
							<div class="col-lg-5 col-lg-offset-1 col-sm-12">
								<p><span class="glyphicon glyphicon-earphone"></span> 0424-2777546</p>
								<p><span class="glyphicon glyphicon-earphone"></span> 0424-2788219</p>
							</div>
							<div class="col-lg-6 col-sm-12">
								<p><span class="glyphicon glyphicon-envelope"></span> <a href="mailto:delishotsdesserts@gmail.com">delishotsdesserts@gmail.com</a></p>
							</div>
						</div>
					</div>

					<div class="col-sm-10 col-sm-offset-1">
						<h3>¡Déjanos tu comentario!</h3>
						<form class="contact-form" action="enviar.php" method="post">
							<div class="row">

								<div class="col-sm-4">
									<input name="nombre" type="text" class="form-control form-text" placeholder="Nombre" required />
								</div>

								<div class="col-sm-4">
									<input name="telefono" type="text" class="form-control form-text" placeholder="Teléfono" required />
								</div>

								<div class="col-sm-4">
									<input name="correo" type="email" class="form-control form-text" placeholder="Correo" required />
								</div>

							</div>
							<div class="row">

								<div class="col-sm-12">
									<textarea name="comentario" class="form-control" rows="4" placeholder="Comentario" required></textarea>
									<button type="" class="btn btn-success"><span class="glyphicon glyphicon-send"></span> Enviar</button>
								</div>

							</div>
						</form>

						<?php
						$nombre = $_POST['nombre'];
						$telefono = $_POST['telefono'];
						$correo = $_POST['correo'];
						$comentario = $_POST['comentario'];

						# Include the Autoloader (see "Libraries" for install instructions)
						require 'vendor/autoload.php';
						use Mailgun\Mailgun;

						# Instantiate the client.
						$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
						$domain = "mg.delishotsdesserts.com";

						# Make the call to the client.
						$result = $mgClient->sendMessage($domain, array(
								'from'    => 'Delishots Desserts <postmaster@mg.delishotsdesserts.com>',
								'to'      => 'Delishots Desserts <jdsosa@gmail.com>',
								'subject' => 'Nuevo mensaje desde la página web',
								'text'    => '
										Ha recibido un nuevo mensaje desde la página web.

										Nombre: ' .$nombre .'
										Apellido: ' .$telefono .'
										Email: ' .$correo .'
										Comentario: ' .$comentario .'
								'
						));

						echo "<script type='text/javascript'>
							$(document).ready(function(){
								$('#myModal').modal('show');
							});
						</script>";


						 ?>
						 <!-- Modal -->
		 				<div id="myModal" class="modal fade" role="dialog">
		 				  <div class="modal-dialog">

		 				    <!-- Modal content-->
		 				    <div class="modal-content">
		 				      <div class="modal-header">
		 				        <button type="button" class="close" data-dismiss="modal">&times;</button>
		 				        <strong><h2 class="modal-title">¡Mensaje Enviado!</h2></strong>
		 				      </div>
		 				      <div class="modal-body">
		 				        <p>Su solicitud ha sido enviada y sera atendida a la brevedad posible.</p>
		 				      </div>
		 				      <div class="modal-footer">
		 				        <button type="button" class="btn btn-success" data-dismiss="modal" onclick="location.href='./contactanos.html';">Continuar</button>
		 				      </div>
		 				    </div>

		 				  </div>
		 				</div>

					</div>

				</div>
			</main>
		</div>
	</div>

	<div class="row-fluid fade-in body">
		<div class="col-md-8 col-md-offset-2">
			<footer>
				<p>Copyright © 2016 DELISHOTS & DESSERTS. Todos los derechos reservados.</p>
				<p>Creado por <a href="https://github.com/JDSDigital" target="_blank">JDSDigital</a></p>
				<p><a href="https://github.com/JDSDigital" target="_blank"><img src="./img/GitHub-Mark-32px.png" /></a></p>
			</footer>
		</div>
	</div>
</div>
</body>
</html>
