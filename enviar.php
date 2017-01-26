<!DOCTYPE html>
<html>
<head>
	<meta name="description" content="Comenzamos elaborando postres caseros para eventos familiares, con recetas que han pasado de generación en generación, al pasar el tiempo fuimos recopilando nuevas recetas y aumentando nuestro repertorio, obteniendo un alto nivel de aceptación de amigos y familiares, esto representó un gran incentivo y nos vimos en la necesidad de tomar la decisión de crear una pequeña empresa de todo lo que veníamos haciendo, planteándonos la mejor forma de presentar nuestros postres y el tipo de mercado que atenderíamos. Así se formó Delishot & Desserts, la cual es una empresa familiar dedicada a la elaboración de postres con diferentes presentaciones para todo tipo de eventos y reuniones."/>
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
<div class="container-fluid">

	<div class="row">
		<header>
			<a href="./index.html" class="hvr-ripple-out"><img id="logo-banner" class="img-responsive" src="./img/logo3.png" /></a>
		</header>
	</div>

	<div class="row-fluid">
		<nav id="top-menu">
			<ul>
				<li class=""><a class="hvr-wobble-top" href="./about.html">Quienes Somos</a></li>
				<li class=""><a class="hvr-wobble-top" href="./nuestros_productos.html">Nuestros Productos</a></li>
				<li class=""><a class="hvr-wobble-top" href="./opcion.html">Escoge tu Mejor Opción</a></li>
				<li class=""><a class="hvr-wobble-top" href="./galeria.html">Galería</a></li>
				<li class=""><a class="hvr-wobble-top active" href="./contactanos.html">Contáctanos</a></li>
			</ul>
		</nav>
	</div>

	<div class="row-fluid fade-in body">
		<div class="col-md-8 col-md-offset-2 col-padding">
			<main id="main-index">

				<h1>Contáctanos</h1>

				<div class="row-fluid contact">
					<form class="contact-form" action="enviar.php" method="post">
						<input name="nombre" type="text" class="form-control form-text" placeholder="Nombre" required />
						<input name="telefono" type="text" class="form-control form-text" placeholder="Teléfono" required />
						<input name="correo" type="email" class="form-control form-text" placeholder="Correo" required />
						<textarea name="comentario" class="form-control" rows="4" placeholder="Comentario" required></textarea>
						<button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-send"></span> Enviar</button>
					</form>

					<?php
					$nombre = $_POST['nombre'];
					$apellido = $_POST['apellido'];
					$email = $_POST['email'];
					$comentario = $_POST['comentario'];

					# Include the Autoloader (see "Libraries" for install instructions)
					require 'vendor/autoload.php';
					use Mailgun\Mailgun;

					# Instantiate the client.
					$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
					$domain = "mg.delishotsdesserts.com";

					# Make the call to the client.
					$result = $mgClient->sendMessage($domain, array(
							'from'    => 'Grupo JGM Web <postmaster@mg.delishotsdesserts.com>',
							'to'      => 'Grupo JGM <jdsosa@gmail.com>',
							'subject' => 'Nuevo mensaje desde la página web',
							'text'    => '
									Ha recibido un nuevo mensaje desde la página web.

									Nombre: ' .$nombre .'
									Apellido: ' .$apellido .'
									Email: ' .$email .'
									Comentario: ' .$comentario .'
							'
					));

					echo "<br />Su solicitud ha sido enviada y sera atendida a la brevedad posible.";

					 ?>

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
