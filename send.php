<?php
	$nombre = $_POST['nombre'];
	$mail = $_POST['mail'];
	$mensaje = $_POST['mensaje'];
	$para = 'juaan.beldi2@gmail.com';
	
	$header = "Mime-version:1.0;\r\n";
	$header .= "Content-type: text/html; charset=utf-8;\r\n";
	$header .= "From: $mail;\r\n";
	$header .= "To: $para\r\n";
	
	mail($para, 'Consulta Helathy Vape', $mensaje, $header);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title>Healthy Vape</title>
	<link rel="icon" href="favicon.png"/>
	<link href="recursos/styles.css" rel="stylesheet" />
	
	<script src="recursos/jquery.min.js" type="text/javascript"></script>
	<script src="recursos/recursos.js" type="text/javascript"></script>
	
	<script src="recursos/animsition.js" type="text/javascript"></script>
	<link rel="stylesheet" href="recursos/css/animsition.css"/>
	
	<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet"/> 
</head>
<body>
	
	<div><a id="logo" class="animsition-link" href="index.html"></a></div>
	<h1>Healthy Vape</h1>
	<ul id="nav">
		<li><a href="index.html" class="animsition-link">Home</a></li>
		<li><a href="productos.html" class="animsition-link">Productos</a></li>
		<li><a href="nosotros.html" class="animsition-link">Nosotros</a></li>
		<li><a href="contacto.html" class="animsition-link">Contacto</a></li>
		<li><a href="mapa.html" class="animsition-link">Mapa</a></li>
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
				Copyright 2018 | 
				Juan Beldi |
				<a onclick="window.open(this.href,'_blank');return false" href="http://www.facebook.com/Juaan.Beldi" class="fb"></a> | 
				<a href="mailto:juaan.beldi@hotmail.com?subject=Contacto desde la web" class="mail"></a>
			</p>
			<p>
				PROYECTO PARA ESCUELA DAVINCI
			</p>
		</div>
	</div>
</body>
</html>