$(document).ready(function() {
    $('.img-fondo').css({ 'width':'100%', 'height':'100%', 'margin':'0 auto'});
    $('.carousel').carousel({
        interval: 3500
    });

	var inputNombre = $("#inputnombre");
	var labelNombre = $("#labelnombre");
	var inputEmail = $("#inputEmail");
	var labelEmail = $("#labelEmail");
	var inputMensaje = $("#inputMensaje");
	var labelMensaje = $("#labelMensaje");
	
	//Eventos formulario
	
	if(inputNombre.val() == "") {
	  		labelNombre.css({'top' : '0', 'opacity': '1'});
	} else {
		labelNombre.css({ 'top' : '-30px', 'opacity': '0.3'});
	}
	
	if(inputEmail.val() == "") {
	  		labelEmail.css({'top' : '0', 'opacity': '1'});
	} else {
		labelEmail.css({ 'top' : '-30px', 'opacity': '0.3'});
	}
	
	if(inputMensaje.val() == "") {
	  		labelMensaje.css({'top' : '0', 'opacity': '1'});
	} else {
		labelMensaje.css({ 'top' : '-30px', 'opacity': '0.3'});
	}

	inputNombre.focus(function() {
		labelNombre.css({ 'top' : '-30px', 'opacity': '0.3'});
	});
	
	inputNombre.focusout(function() {
		if(inputNombre.val() == "") {
	  		labelNombre.css({'top' : '0', 'opacity': '1'});
		}
	});
	
	inputEmail.focus(function() {
	  		labelEmail.css({ 'top' : '-30px', 'opacity': '0.3'});
	});
	
	inputEmail.focusout(function() {
		if(inputEmail.val() == "") {
	  		labelEmail.css({'top' : '0', 'opacity': '1'});
		}
	});
	
	inputMensaje.focus(function() {
	  		labelMensaje.css({ 'top' : '-30px', 'opacity': '0.3'});
	});
	
	inputMensaje.focusout(function() {
		if(inputMensaje.val() == "") {
	  		labelMensaje.css({'top' : '0', 'opacity': '1'});
		}
	});

	
	//Efectos redes sociales
	
	var facebook = $("#facebook");
	var facebook1 = $("#facebook1");
	var facebook2 = $("#facebook2");
	var instagram = $("#instagram");
	var instagram1 = $("#instagram1");
	var instagram2 = $("#instagram2");
	var linkedin = $("#linkedin");
	var linkedin1 = $("#linkedin1");
	var linkedin2 = $("#linkedin2");
	
	$('#facebook').hover(function(){
        facebook1.hide();
		facebook2.show();
    },function(){
        facebook2.hide();
		facebook1.show();
    });
	
	$('#instagram').hover(function(){
        instagram1.hide();
		instagram2.show();
    },function(){
        instagram2.hide();
		instagram1.show();
    });
	
	$('#linkedin').hover(function(){
        linkedin1.hide();
		linkedin2.show();
    },function(){
        linkedin2.hide();
		linkedin1.show();
    });

    var scroll_start = 0;
    var wrap = $("#navmain");
    var ww = $('#ww');

    $(document).scroll(function() { 
        
      scroll_start = $(this).scrollTop();
        
        if(scroll_start) {
           wrap.addClass("menuScrollGrande");
            ww.addClass("ww");
            $("#hamburguerBtnAlb").css({'background-image' : 'url(../img/boton-de-menu.svg)'});
            $("#logoHamburguesaAlb").css({'background-image' : 'url(../img/iconos/logo1.png)','width':'200px','height':'41px','background-repeat':'no-repeat','top':'12.5px'});
       } else {
           wrap.removeClass("menuScrollGrande");
           ww.removeClass("ww");
            $("#hamburguerBtnAlb").css({'background-image' : 'url(../img/boton-de-menu-negro.svg)'});
            $("#logoHamburguesaAlb").css({'background-image' : 'url(../img/iconos/logo2.png)','width':'200px','height':'41px','background-repeat':'no-repeat','top':'12.5px'});
       }
   });
    
    $('.btnMenu').click(function() {
        $("#hamburguer").attr("checked",false);
    });
});

