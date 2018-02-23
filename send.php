<?php
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$mail = $_POST['mail'];
	$genero = $_POST['genero'];
	$donde = $_POST['donde'];
	$mensaje = $_POST['mensaje'];
	$screenshot = $_POST['screenshot'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title>Healthy Vape</title>
	<link href="recursos/styles.css" rel="stylesheet" />
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
	<script src="recursos/jq.js" type="text/javascript"></script>
	
	<script src="recursos/animsition.js" type="text/javascript"></script>
	<link rel="stylesheet" href="recursos/css/animsition.css">
	
	<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet"/> 
</head>
<body>
	
	<a id="logo" class="animsition-link" href="index.html"></a>
	<h1>Healthy Vape</h1>
	<ul id="nav">
		<li><a href="index.html" class="animsition-link">Home</a></li>
		<li><a href="productos.html" class="animsition-link">Productos</a></li>
		<li><a href="nosotros.html" class="animsition-link">Nosotros</a></li>
		<li><a href="contacto.html" class="animsition-link">Contacto</a></li>
		<li><a href="#" class="active">Mapa</a></li>
	</ul>
	
	<div id="container"  class="animsition">
		
		
		<div id='gracias'>
			<h2>Gracias</h2>
			
			<div>
				<p>Gracias <?php echo $nombre ?> por contactarnos, en breve responderemos su consulta!</p>
				<a href="contacto.html" class="animsition-link">VOLVER</a>
			</div>
		</div>
		
	</div>
	<div id="footer">
		<div>
			<p>
				Copyright 2017 | 
				Juan Beldi |
				<a onclick="window.open(this.href,'_blank');return false" href="http://www.facebook.com/Juaan.Beldi" class="fb"></a> | 
				<a href="mailto:juaan.beldi@hotmail.com?subject=Contacto desde la web" target="_top" class="mail"></a>
			</p>
			<p>
				PROYECTO PARA MAQUETADO WEB(PROFESOR GERMAN RODRIGUEZ) ESCUELA DAVINCI
			</p>
		</div>
	</div>
</body>
</html>