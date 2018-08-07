$( function() {
	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	if(sPage == 'productos.html'  || sPage == 'index.html'){
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
			width: '50%',
			draggable: false,
			modal: true,
			dialogClass: 'noTitle'
		});
	
		$(document).on('click', '.ui-widget-overlay', function () {
			$("#tmini").dialog("close");
		});
		
		var overlay = $('<div/>',{'class': 'overlay'});
		overlay.append($('<p>VER MAS</p>'));
		$( ".productos ul li" ).append(overlay);
		
		$(".ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset").append($('<span class="price"></span>'));
		
		if(sPage == 'productos.html' )
		{
			$( ".productos ul li" ).on( "click", function() {
				
				var index = $( ".productos ul li" ).index(this);
				$("#tmini h3").text($('.nombre')[index].innerHTML);
				$("#tmini img").attr('src', "recursos/productos/" + kits[index].img);
				$("#tmini #botones p").text('$'+kits[index].precio);
				$("#tmini>div>p").html($.parseHTML(kits[index].info));
				$("#tmini" ).dialog( "open" );
			});
		}
		else
		{
			$("#lay").removeClass("out");
			window.onbeforeunload = function (e) {
			   $("#lay").addClass("out");
			}
			
			$( ".product a" ).on( "click", function() {
				var index = $( ".product a" ).index(this);
				$("#tmini #titleBar h3").text(feat[index].nombre);
				$("#tmini #media object").attr({"width":"400","height":"60%","data":feat[index].vid});
				$("#tmini #media object param").attr({"name":"movie","value":feat[index].vid});
				$("#tmini #botones p").text('$'+feat[index].precio);
				$("#tmini>div>p").html($.parseHTML(feat[index].info));
				$("#tmini" ).dialog( "open" );
			});
		}
	}
	
		$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 500,
		outDuration: 300,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'animsition-loading',
		loadingInner: '',
		timeout: true,
		timeoutCountdown: 500,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	});
	
	
		
});


var kits = [];
var feat = [];

/*
Featured
*/

feat[0] = {
	nombre: 'Toptank Mini',
	info:'El Toptank Mini en realidad es el famoso Subtank Mini que ha pasado por un lavado de cara y todo para mejor! Para empezar <strong> cuenta con la opción "Top Fill" para que se pueda llenar desde arriba sin tener que desmontar la base del atomizador a la hora de rellenarlo con e-líquido.</strong>\n\n El tanque tiene una capacidad para 4ml de líquido con lo que no tendrá que rellenarlo varios veces al día. Además, <strong>utiliza las nuevas resistencias SSOCC de Kanger</strong> que se fabrican en acero inoxidable y algodón orgánico para asegurarle el mejor sabor y una buena calidad.',
	vid: 'https://www.youtube.com/embed/VJ1v3Q4myGw',
	precio: 35.99
}

feat[1] = {
	nombre: 'Kangertech Topbox Mini',
	info:'Desde Kanger nos llega el nuevo Topbox Mini Kit que incluye el KBOX Mini TC MOD <strong>con 75W de potencia y el atomizador Toptank Mini</strong>. El Kit es una versión mejorada del ya conocido SUBOX Mini Kit. Es un kit perfecto para los vaperos que buscan una experiencia de vapeo sub-ohm de calidad y a un precio muy económico. <strong>Es un kit ideal tanto para los vaperos con poca experiencia como para los usuarios más avanzados</strong>. Incorpora un sistema de control de temperatura y la nueva función de llenado desde la parte superior del atomizador.\n\n El KBOX Mini TC puede llegar hasta 75W de potencia y incorpora la función de control de temperatura que permite usarlo con resistencias de níquel, titanio, acero inoxidable e hilo Ni-Chrome. El MOD necesita una batería de 18650 (no incluida) y se introduce quitando la tapa que lleva un cierre magnético.',
	vid: 'https://www.youtube.com/embed/3fW1RPyR-Rk',
	precio: 109.99
}

/*
Kits
*/

kits[0] = {
	info: 'X-Priv, una combinación perfecta de potencia y belleza. Está cubierto con material vítreo en la parte delantera, que puede ofrecerle una apariencia de lujo y <strong>una pantalla de alta definición</strong>.\n\nEmplea una interfaz de usuario recientemente diseñada, más simple e intuitiva que otros productos. <strong>Y su potencia de salida puede llegar a 225W</strong>, lo que puede cumplir con las diferentes demandas de los cazadores de vapor.\n La tecla de disparo de X-Priv está diseñada creativamente en el lado izquierdo, es mucho más fácil de operar que antes.\n Además, utiliza el tanque TFV12 Prince, con poderosos núcleos V12 Prince para disfrutar plenamente del vapor masivo. Potente función, apariencia elegante.\n\n ¡X-Priv está aquí para conquistarte! ¡La innovación sigue cambiando la experiencia de vapear!',
	img: 'kits/p1.jpg',
	precio: 99.99
}

kits[1] = {
	info: 'T-Priv 3 regresa con auras que emanan un poderoso carisma y justicia.\n Siendo un gran líder, tiene un gran sentido del honor para ser invencible. Adopta el mismo diseño hueco que el mod T-Priv para mostrar la ambición del rey.\n\n De cubo a elipsoide, T-Priv 3 realiza un proceso de deformación perfecto,que se vuelve más robusto y poderoso. <strong>La salida Super 300W, alimentada por 3 baterías 18650, garantiza una experiencia de vapeo despreocupado a su gusto</strong>.\n Todavía usa el revolucionario tanque <strong>TFV12 Prince con una capacidad súper grande: 8 ml</strong> para brindarle un sabor maravilloso continuamente.',
	img: 'kits/p2.jpg',
	precio: 89.99
}

kits[2] = {
	info: '¡Aquí viene el mod de diseño ergonómico mas innovador hecho hasta la fecha! Rápido y furioso, traba y carga, <strong>¡225W Mag Mod!</strong>\n\nPuede apretar el gatillo para vapear. Mag tiene una gran pantalla a color HD que muestra datos específicos. <strong>Y usa el nuevo y revolucionario tanque TFV12 Prince, que tiene una capacidad supergrande sin precedentes: 8 ml</strong>.\n Con todos los nuevos y potentes núcleos de vapeo, este Príncipe asegura que tendrás una gran experiencia. También hemos incorporado un mecanismo patentado de bloqueo de tanques que garantiza un sellado perfecto.\n\n Cuando el MAG se encuentre con el PRINCE, ¡te sorprenderá gratamente!',
	img: 'kits/p3.jpg',
	precio: 109.99
}

kits[3] = {
	info: '<strong>Alimentado por dos baterias 18650, el nuevo SMOK G-Priv 2 Box Mod entrega una potencia maxima de 230W viene acompañado del TFV12 Prince con una capacidad de 8ml</strong> todo ello en una versión de lujo.\n\n Su enorme pantalla tactil de alta defincion de 2" y su boton de bloqueo hacen de el un mod muy facil de manejar.',
	img: 'kits/p4.jpg',
	precio: 109.99
}

kits[4] = {
	info: 'Wismec LUXOTIC BF, un nuevo mod diseñado por JayBo, <strong>cuenta con un sistema re-imaginado de squonk incorporada y recargable</strong>, e-líquido botella de 7.5 ml de capacidad.\n\n El LUXOTIC BF es de uso cómodo y de moda en apariencia.\n El BF RDA, una resistencia de gama alta alimentado por un atomizador goteo, nos impresiona con su singular diseño de flujo de aire y estructura desmontable.\n\n Simple, compacto pero potente, LUXOTIC BF RDA.',
	img: 'kits/p5.jpg',
	precio: 74.99
}

kits[5] = {
	info: 'El nuevo Majesty 225W TC Box Mod Luxe Edition y TFV12 Prince Kit completo es una nueva línea de SMOK que cuenta con un hermoso acabado de resina cobra, acabado de fibra de carbono y una interfaz de usuario mejorada con datos de vapeo detallados y presenta el tanque TFV12 Prince Sub-Ohm.',
	img: 'kits/p6.jpg',
	precio: 109.99
}

kits[6] = {
	info: 'El Smok Stick Prince en Kit es un Cigarrillo Electronico que <strong>viene con el nuevo Atomizador TFV12 con una capacidad de 8 ml, una bateria de 3.000 mAh para vapear mucho tiempo</strong>, indicador led de estado de la bateria, mecanismo de bloqueo en el tanque para evitar fugas de liquido.\n\n El Stick Prince en kit emplea una batería incorporada de 3000mAh que es potente y duradera, con su gran capacidad puede disfrutar del vapeo por mucho tiempo.',
	img: 'kits/p7.jpg',
	precio: 54.99
}

/*
Mods
*/

kits[7] = {
	info: 'El VooPoo DRAG 157W TC Box Mod con Gene Chip inside es un mod alimentado con doble bateria 18650 (<em>No incluidas</em>). Compatible con la aplicación VooPoo para PC para una personalización completa y configuraciones de ajuste fino. <strong>¡El Gene Chip dentro del DRAG ofrece un paquete de control de temperatura completo con una potencia máxima de 157 W y una velocidad de disparo de 0.025 segundos!</strong>\n\n El VooPoo DRAG es un Box Mod de potencia variable altamente eficiente con una calificación de eficiencia de chip del 95% para una salida de potencia precisa y confiable. El chasis del DRAG está hecho de aleación de zinc y tiene un panel de acento de fibra de carbono en un lado y la palabra DRAG ligeramente grabada en la puerta de acceso a la batería.\n <sontrg>DRAG es compatible con la aplicación para PC VooPoo, que permite al usuario personalizar la configuración y agregar un logotipo personalizado a la pantalla.</strong>\n\n El VooPoo DRAG 157W TC Box Mod es ideal para usuarios que buscan una salida de potencia importante con un retraso de disparo mínimo para ese SUPER DRAG! <strong>Tenga en cuenta que las baterías deben coincidir en la marca, el modelo y el estado de la batería en todo momento.</strong>',
	img: 'mods/p1.jpg',
	precio: 64.99
}

kits[8] = {
	info: '¡El Smoant Ranker 218W TC Box MOD está aquí para usted! Alimentado con dos baterías externas 18650, <strong>el Ranker dispara a una potencia máxima de 218W</strong>. Adopta el conjunto de chips actualizado Ant218 V2, proporcionando un rendimiento estable y una velocidad de disparo de 0.015s. Viene con una tecla de fuego grande y receptiva, ¡brindando una experiencia de vapeo fácil!',
	img: 'mods/p2.jpg',
	precio: 74.99
}

kits[9] = {
	info: 'Revenant Vapes Cartel 160W TC Box Mod es una triple colaboración entre Vaporesso, Cartel y Revenant Vapes para crear un impresionante sistema que integra la famosa placa OMNI,<strong> capaz de seis modos de salida total con los nuevos modos <abbr title="Curva de potencial">CCW</abbr> y <abbr title="Curvar de temperatura">CCT</abbr></strong>, de una manera única y lujoso chasis.\n\n El chasis de Cartel 160W TC Box presenta un fuerte y firme formato rectangular que integra elementos de acero inoxidable de alta resistencia en la parte superior, la base y la cara.\n\n<strong> El acero inoxidable refuerza el chasis de resina teñida que presenta patrones únicos y elegantes, lo que hace que cada uno de los Cartel 160W sea diferente entre sí.</strong> La placa OMNI integrada en el sistema de salida principal de Vaporesso, y presenta seis modos de salida, con los nuevos modos de Curva de potencial (CCW) y Curva de temperatura personalizada (CCT) que añaden un mayor rango de versatilidad y precisión.',
	img: 'mods/p3.jpg',
	precio: 179.99
}

kits[10] = {
	info: 'El Augvape V200 Mod es el nuevo mod de Augvape. Alimentado por dos baterías 18650, <strong>la salida máxima puede alcanzar hasta 200W</strong>. Además, es realmente un atractivo y compacto dispositivo de 200 vatios con diseño de botones ocultos, sin importar cómo lo sostengas, se siente bien en la mano. Además de la apariencia, la característica más exclusiva es el modo V200.\n\n <strong>Este modo puede obtener un vataje más inmediato y estable. Cuanto mayor sea la potencia, mejor y más alto rendimiento.</strong>\n\n Puedes disfrutar de la mejor experiencia de vapeo con este increíble mod.',
	img: 'mods/p4.jpg',
	precio: 79.99
}

kits[11] = {
	info: 'Mirage  DNA  75C de Lost Vape, es el nuevo mod DNA de Lost Vape, <strong>con una capacidad de 75w de potencia máxima</strong>. Sus acabados en resina te alucinarán. <strong>Trae incorporado el nuevo CHIP DNA75C Color.</strong>',
	img: 'mods/p5.jpg',
	precio: 154.99
}

/*
Tanks
*/

kits[12] = {
	info: 'Uwell presenta el Nunchaku, que presenta una capacidad máxima de 5 mililitros y las nuevas bobinas Nunchaku.\n El Nunchaku mide 25,2 mm de diámetro y cuenta con elementos de diseño elegante e inteligente que se combinan para un diseño universalmente atractivo. El Nunchaku presenta un método de relleno superior roscado que se desenrosca para revelar dos puertos de llenado.',
	img: 'tanks/p1.jpg',
	precio: 34.99
}

kits[13] = {
	info: 'El tanque Smoant Battlestar sub-ohm que puede acomodar 4 ml de e-juice, mide 24.5 mm de diámetro y utiliza una bobina de 0.4 ohm o 0.15 ohm.\n\n El tanque Battlestar Sub-Ohm cuenta con un conector chapado en oro 510 para una conductividad increíble.\n\n El airflow se encuentra en la parte inferior, que se puede ajustar fácilmente para las preferencias de los usuarios, y utiliza una punta de goteo 810 para una personalización más versátil.',
	img: 'tanks/p2.jpg',
	precio: 34.99
}

kits[14] = {
	info: 'VooPoo presenta el tanque Sub-ohm de UFORCE, un tanque sub-ohm con un sistema de ventilación mejorado y ranuras de flujo de aire triple para una inhalación equilibrada y sabrosa.\n\n El UFORCE utiliza un canal de ventilación rápido para producir vapor enorme sin calentar el tanque demasiado rápido.',
	img: 'tanks/p3.jpg',
	precio: 49.99
}

kits[15] = {
	info: 'El tanque Sub-Ohm Revvo de Aspire es un tanque de llenado superior roscado de 24 mm con un innovador sistema de llenado por resorte y el nuevo cabezal de bobina ARC (Aspire Radial Coil) orientado horizontalmente.\nSe utiliza un solo puerto de llenado con resorte para llenar el tanque, que es capaz de contener hasta 3.6 ml de E-Liquid.',
	img: 'tanks/p4.jpg',
	precio: 39.99
}

kits[16] = {
	info: 'El tanque de sub-ohmios más nuevo de Vaporesso, el Cascade Sub-Ohm Tank, es un sistema de llenado superior deslizable de 25 mm, capaz de contener hasta 7 ml de su E-Liquid favorito, cuenta con un sistema de reemplazo de bobina EUC y un sistema triangular.\n\n El Cascade Sub-Ohm Tank utiliza la familia GTM Coil, que incluye una cabeza GTM 2 de 0.4 ohm y una cabeza de bobina GTM 8 de 0.15 ohm.',
	img: 'tanks/p5.jpg',
	precio: 39.99
}

kits[17] = {
	info: 'Sense regresa con Herakles 3 Sub-Ohm, una actualización evolutiva de una de las conocidas plataformas Sub-Ohm Tank en la historia de nuestra industria que presenta un chasis de 24 mm de diámetro con una capacidad máxima de 4.5 mililitros, una hermosa punta de goteo de delrin y una conveniente sistema de relleno superior de la bisagra del tirón.',
	img: 'tanks/p6.jpg',
	precio: 39.99
}

kits[18] = {
	info: 'FreeMax presenta su FireLuke Mesh Sub-Ohm Tank, un sistema de llenado superior roscado de 24 mm de diámetro que utiliza cabezales de bobina de malla y una construcción completamente moleteada.\n\n El tanque puede contener un máximo de 3 ml de E-Liquid que se llena fácilmente desde un puerto de llenado superior moleteado.',
	img: 'tanks/p7.jpg',
	precio: 34.99
}

kits[19] = {
	info: 'Uwell presenta Valyrian, una plataforma evolutiva Sub-Ohm Tank que presenta un chasis de 25 mm de diámetro con una capacidad máxima de 5 mililitros y la nueva bobina Valyrian con cuatro bobinas y patas paralelas, mayor potencia y pasadores de bobina para un flujo de aire y sabor personalizados.',
	img: 'tanks/p8.jpg',
	precio: 49.99
}

kits[20] = {
	info: 'El tanque SMOK TFV12 Prince Sub-Ohm Tank entra en el mercado como el tanque Sub-Ohm más capaz jamás lanzado.\n\n Encabezado por el extraordinario rango máximo de 120W de la cabeza de bobina decuple Prince-T10 V12, presentando posibilidades de vapor y sabor sin precedentes.',
	img: 'tanks/p9.jpg',
	precio: 49.99
}

kits[21] = {
	info: 'Ilumina el camino con el Tanque Sub-Ohm SMOK TFV8 Big Baby Beast Light Edition.\n\n Uno de los tanques más populares y aclamados por la crítica hasta la fecha, con el tamaño manejable y familia de bobinas de rendimiento asequible de la familia Baby Beast con la capacidad y el alcance del TFV8 de tamaño completo y las nuevas luces LED ubicadas debajo de la junta tórica sello.',
	img: 'tanks/p10.jpg',
	precio: 34.99
}