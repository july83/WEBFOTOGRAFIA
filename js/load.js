$(document).ready(function() {
    $('.img-fondo').css({ 'width':'100%', 'height':'100%', 'margin':'0 auto'});
    $('.carousel').carousel({
        interval: 3500
    });

	
	
	
    /*var scroll_start = 0;
	var ee = $('ejemplo');
	var div_alto = $("#carousel-example-generic").height();
	$(".icon-bar").css('background-color', '#ffffff');

	
       $(document).scroll(function() { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > (div_alto - 85)) {
              $(".navbar-default").css({'background-color':'#ffffff', 'transition' : '1s', 'opacity' : '0.8'});
              $("#ejemplo").css('position' , 'fixed');
              $("#logo1").hide();
              $("#logo2").show();
              $("#menuHover > li > a").css('color', '#404a3d');
              $(".icon-bar").css('background-color', '#888');

           } else {
              $('.navbar-default').css({'background-color': 'transparent' , 'transition' : 'none'});
              $("#ejemplo").css({'position' : 'absolute', 'z-index' : '999'});
              $("#logo2").hide();
              $("#logo1").show();
               $("#menuHover > li > a").css('color', '#ffffff');
               $(".icon-bar").css('background-color', '#ffffff');
           }

       });*/
    
    
    


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
	
	

	var anchoPantalla = screen.width;
	
	
	var tituloImgInicio = $('.tituloImgInicio').width();
	var subtituloImgInicio = $('.subtituloImgInicio').width();
	var tituloImgInicio2 = $('.tituloImgInicio2').width();
	var subtituloImgInicio2 = $('.subtituloImgInicio2').width();
	
	$('.tituloImgInicio').animate({
          'margin-left':  (anchoPantalla - tituloImgInicio - 16)/2
	},1500);
	
	$('.subtituloImgInicio').animate({
          'margin-right':  (anchoPantalla - subtituloImgInicio - 16 )/2 
	},1500);
	
	$('.tituloImgInicio2').animate({
          'margin-left':  (anchoPantalla - tituloImgInicio2 - 16)/2
	},1500);
	
	$('.subtituloImgInicio2').animate({
          'margin-right':  (anchoPantalla - subtituloImgInicio2 - 16 )/2 
	},1500);
    
    
    
    

    
    
    var scroll_start = 0;
	
    var wrap = $("#navmain");
    
    $(document).scroll(function() { 
        
      scroll_start = $(this).scrollTop();
        
        if(scroll_start) {
          
           wrap.addClass("fix-search");
         
       } else {
           
           wrap.removeClass("fix-search");
       }
	   
   });
    
    /*$('.btnMenu').click(function() {
        $('.navmain').css("transform","translate3d(0px, -100px, 0px)");
    });*/

	
});

