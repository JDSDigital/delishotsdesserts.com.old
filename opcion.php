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
	<!--<script src="./js/script.js"></script>-->
	<script src="./js/prices.js"></script>
	<script src="./js/cart.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Raleway:400,400i|Oxygen" rel="stylesheet">
</head>
<?php
    if(isset($_POST['nombre'])){
        echo "<p>nombre</p>";
    }
?>
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
					<li class=""><a class="hvr-wobble-top active" href="./opcion.html">Escoge tu Mejor Opción</a></li>
					<li class=""><a class="hvr-wobble-top" href="./galeria.html">Galería</a></li>
					<li class=""><a class="hvr-wobble-top" href="./contactanos.html">Contáctanos</a></li>
				</ul>
			</nav>
			<nav class="hidden-lg hidden-md top-menu-xs">
				<ul>
					<li class=""><a class="hvr-wobble-top" href="./index.html">Inicio</a></li>
					<li class=""><a class="hvr-wobble-top" href="./about.html">Quienes Somos</a></li>
					<li class=""><a class="hvr-wobble-top" href="./nuestros_productos.html">Nuestros Productos</a></li>
					<li class=""><a class="hvr-wobble-top active" href="./opcion.html">Escoge tu Mejor Opción</a></li>
					<li class=""><a class="hvr-wobble-top" href="./galeria.html">Galería</a></li>
					<li class=""><a class="hvr-wobble-top" href="./contactanos.html">Contáctanos</a></li>
				</ul>
			</nav>
		</div>
		<div class="col-md-9 col-padding">
			<main id="main-index-option">
				<div class="col-md-12">
					<h1>Escoge Tu Mejor Opción</h1>
				</div>

				<div class="show-product">
					<ul id="product-list"></ul>
				</div>

				<div class="row add-product">
					<div class="col-md-12">
						<ul>
							<li>Click para agregar un producto</li>
						</ul>
					</div>
				</div>

				<div class="row-fluid resultLine">

					<div class="col-md-1 col-md-offset-8">
						<p>Total:</p>
					</div>

					<div class="col-md-1">
						<div id="result"><p>0</p></div>
					</div>

				</div>

				<div class="row calculate">
					<div class="col-md-12">
						<button type="button" id="buttonCalculate" class="btn btn-info"><span class='glyphicon glyphicon-info-sign'></span> Calcular</button>
						<button type="button" id="buttonContinueToProducts" class="btn btn-success"><span class='glyphicon glyphicon-ok'></span> Continuar</button>
					</div>
				</div>

				<!-- Modal Products-->
				<div id="modalProducts" class="modal fade" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h2 class="modal-title"><strong>Usted pidió:</strong></h2>
							</div>
							<div class="modal-body modal-body-products"></div>
							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
								<button type="button" id="buttonContinueToForm" class="btn btn-success">Continuar</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Modal Form-->
				<div id="modalForm" class="modal fade" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h2 class="modal-title"><strong>Datos de contacto:</strong></h2>
							</div>
							<form class="contact-form" action="./enviar.php" method="post">
								<div class="modal-body">
									<div class="container-fluid">
										<div class="row">
											<div class="col-md-10 col-md-offset-1">
												<input name="nombre" type="text" class="form-control form-text" placeholder="Nombre" required />
												<input name="telefono" type="text" class="form-control form-text" placeholder="Teléfono" required />
												<input name="correo" type="email" class="form-control form-text" placeholder="Correo" required />
												<input name="fecha" type="text" class="form-control form-text" placeholder="Fecha tentativa" required />
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
										<button type="button" id="test" class="btn btn-success"><span class="glyphicon glyphicon-send"></span> Enviar</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
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
</div>
</body>
</html>