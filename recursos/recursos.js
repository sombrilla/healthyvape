$( function() {
	
	$( "#tmini" ).dialog({
		show: {
			effect: "fade",
			duration: 200
		},
		hide: {
			effect: "fade",
			duration: 200
		},
		resizable:false,
		autoOpen: false,
		closeOnEscape: true,
		height: 500,
		width: 400,
		draggable: false,
		modal: true,
		buttons: {
		COMPRAR: function() {
			$( this ).dialog( "close" );
		}
	  }
	});
	
	$(document).on('click', '.ui-widget-overlay', function () {
		$("#tmini").dialog("close");
	});
	
	var overlay = $('<div/>',{'class': 'overlay'});
	overlay.append($('<p>VER MAS</p>'));
	$( ".productos ul li" ).append(overlay);
	
	$(".ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset").append($('<span class="price"></span>'));
	
	$( ".productos ul li" ).on( "click", function() {
		
		var index = $( ".productos ul li" ).index(this);
		$("#tmini").dialog('option', 'title', $('.nombre')[index].innerHTML);
		$("#tmini img").attr('src', "recursos/productos/kits/" + kits[index].img);
		$(".price").text('$'+kits[index].precio);
		$("#tmini p").text(kits[index].info);
		$("#tmini" ).dialog( "open" );
	});
		
});

var categorias = ['Kits', 'Mods', 'Tanks'];

var kits = categorias['Kits'] = [];
var mods = categorias['Mods'] = [];
var tanks = categorias['Tanks'] = [];


kits[0] = {
	info: 'X-Priv, una combinación perfecta de potencia y belleza. Está cubierto con material vítreo en la parte delantera, que puede ofrecerle una apariencia de lujo y una pantalla de alta definición.\n\nEmplea una interfaz de usuario recientemente diseñada, más simple e intuitiva que otros productos. Y su potencia de salida puede llegar a 225W, lo que puede cumplir con las diferentes demandas de los cazadores de vapor.\n La tecla de disparo de X-Priv está diseñada creativamente en el lado izquierdo, es mucho más fácil de operar que antes.\n Además, utiliza el tanque TFV12 Prince, con poderosos núcleos V12 Prince para disfrutar plenamente del vapor masivo. Potente función, apariencia elegante.\n\n ¡X-Priv está aquí para conquistarte! ¡La innovación sigue cambiando la experiencia de vapear!',
	img: 'p1.jpg',
	precio: 99.99
}

kits[1] = {
	info: 'T-Priv 3 regresa con auras que emanan un poderoso carisma y justicia.\n Siendo un gran líder, tiene un gran sentido del honor para ser invencible. Adopta el mismo diseño hueco que el mod T-Priv para mostrar la ambición del rey.\n\n De cubo a elipsoide, T-Priv 3 realiza un proceso de deformación perfecto,que se vuelve más robusto y poderoso. La salida Super 300W, alimentada por 3 baterías 18650, garantiza una experiencia de vapeo despreocupado a su gusto.\n Todavía usa el revolucionario tanque TFV12 Prince con una capacidad súper grande: 8 ml para brindarle un sabor maravilloso continuamente.',
	img: 'p2.jpg',
	precio: 89.99
}

kits[2] = {
	info: '¡Aquí viene el mod de diseño ergonómico mas innovador hecho hasta la fecha! Rápido y furioso, traba y carga, ¡225W Mag Mod!\n\nPuede apretar el gatillo para vapear. Mag tiene una gran pantalla a color HD que muestra datos específicos. Y usa el nuevo y revolucionario tanque TFV12 Prince, que tiene una capacidad supergrande sin precedentes: 8 ml.\n Con todos los nuevos y potentes núcleos de vapeo, este Príncipe asegura que tendrás una gran experiencia. También hemos incorporado un mecanismo patentado de bloqueo de tanques que garantiza un sellado perfecto.\n\n Cuando el MAG se encuentre con el PRINCE, ¡te sorprenderá gratamente!',
	img: 'p3.jpg',
	precio: 109.99
}

kits[3] = {
	info: 'Alimentado por dos baterias 18650, el nuevo SMOK G-Priv 2 Box Mod entrega una potencia maxima de 230W viene acompañado del TFV12 Prince con una capacidad de 8ml todo ello en una versión de lujo.\n\n Su enorme pantalla tactil de alta defincion de 2" y su boton de bloqueo hacen de el un mod muy facil de manejar.',
	img: 'p4.jpg',
	precio: 109.99
}

kits[4] = {
	info: 'Wismec LUXOTIC BF, un nuevo mod diseñado por JayBo, cuenta con un sistema re-imaginado de squonk incorporada y recargable, e-líquido botella de 7.5 ml de capacidad.\n\n El LUXOTIC BF es de uso cómodo y de moda en apariencia.\n El BF RDA, una resistencia de gama alta alimentado por un atomizador goteo, nos impresiona con su singular diseño de flujo de aire y estructura desmontable.\n\n Simple, compacto pero potente, LUXOTIC BF RDA.',
	img: 'p5.jpg',
	precio: 74.99
}

kits[5] = {
	info: 'El nuevo Majesty 225W TC Box Mod Luxe Edition y TFV12 Prince Kit completo es una nueva línea de SMOK que cuenta con un hermoso acabado de resina cobra, acabado de fibra de carbono y una interfaz de usuario mejorada con datos de vapeo detallados y presenta el tanque TFV12 Prince Sub-Ohm.',
	img: 'p6.jpg',
	precio: 109.99
}

kits[6] = {
	info: 'El Smok Stick Prince en Kit es un Cigarrillo Electronico que viene con el nuevo Atomizador TFV12 con una capacidad de 8 ml, una bateria de 3.000 mAh para vapear mucho tiempo, indicador led de estado de la bateria, mecanismo de bloqueo en el tanque para evitar fugas de liquido.\n\n El Stick Prince en kit emplea una batería incorporada de 3000mAh que es potente y duradera, con su gran capacidad puede disfrutar del vapeo por mucho tiempo.',
	img: 'p7.jpg',
	precio: 54.99
}