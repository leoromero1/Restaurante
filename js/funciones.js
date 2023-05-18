var ancho_pantalla,alto_pantalla;

var acciones = {
	listo : function(){
		jQuery("#lacarta .boton-amarillo").click(acciones.clickbtnamarillo);
		jQuery("#lacarta .contenedor-cuadrado").click(acciones.obtenersrc);
		jQuery(".cabecera .menu a[href*='#']").click(acciones.irancla);
		jQuery(".btn-enviar").click(acciones.enviar);
	},

	enviar:function(){

		var nombre = jQuery("#nombre").val();
		var email = jQuery("#email").val();
		var asunto = jQuery("#asunto").val();
		var mensaje = jQuery("#mensaje").val();

		jQuery("#nombre").val("tu nombre");
		jQuery("#email").val("tu@email");
		jQuery("#asunto").val("tu asunto");
		jQuery("#mensaje").val("tu mensaje");

		console.log(nombre+" "+email+" "+asunto+" "+mensaje);
	},


	obtenersrc:function(){
		var src = jQuery(this).find("img").attr("src");
		jQuery(this).find("img").attr("scr","img/resto1.jpg");
		console.log(src);
	},

	irancla:function(e){
		e.preventDefault();
		var ancla = this.hash
		// alert(ancla);
	},

	clickbtnamarillo : function(e){
		e.preventDefault();
			alert("hola mundo");
	},

	precarga:function(){
		acciones.redimensionar();
	},

	redimensionar:function(){
		// ancho_pantalla = jQuery(window).width();
		// alto_pantalla = jQuery(window).height();
		// console.log(ancho_pantalla+" - "+alto_pantalla);
	},

	scrollventana:function(){

	},
};

jQuery(document).ready(acciones.listo);

jQuery(window).on("load",acciones.precarga);

// jQuery(window).realize(acciones,redimensionar);

// jQuery(window).scroll(acciones,scrollventana);



