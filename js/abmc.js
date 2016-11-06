	jQuery.fn.reset = function () {
	  $(this).each (function() { this.reset(); });
	}		
	
	function agregar(){
	
		$('#popupbox').show();
		$('#block').show();
	}


function modificarr(){
var formData = new FormData(document.getElementById("clientx"));
        formData.append("dato", "valor");	
				
		$.ajax({	
		  type: "POST",
		  url: "php-pdo/modificar.php",
		  dataType: "html",                
                cache: false,
                contentType: false,
	     processData: false	,
		 data: formData,
		  "success":function(data){
		  	$('#clientx').reset();
			$('#block').hide();
			$('#popupbox').hide();
			cargar_all();		
		  }		  
		});
	}

function ordenar(){
var formData = new FormData(document.getElementById("formImg"));
        formData.append("dato", "valor");	
				
		$.ajax({	
		  type: "POST",
		  url: "php-pdo/ordenar.php",
		  dataType: "html",                
                cache: false,
                contentType: false,
	    		processData: false	,
		 data: formData,
		  "success":function(data){
		  	$('#clientx').reset();
			$('#block').hide();
			$('#popupbox').hide();
		//	cargar_all();		
		  }
		});
	}


	
	function editar(id_imagen,orden,id_propiedad,ruta_imagen){
		$('#popupbox').show();
		$('#id_imagen').show();
		$('#lblIdImagen').hide();
		$('#lblIdOrden').hide();
		$('#id_imagen').hide()
		$('#id_propiedad').hide();
		$('#orden').hide();
		$('#lblPropiedad').hide();		
		$('#modificar').show();
		$('#agregar').hide();
		$('#block').show();
		 $('#id_imagen').val(id_imagen);
		 $('#orden').val(orden);
		 $('#id_propiedad').val(id_propiedad);
		 $('#ruta_imagen').val(ruta_imagen);
		
	}
		function guardar(){			
		var formData = new FormData(document.getElementById("clientx"));
        formData.append("dato", "valor");	
		
		$.ajax({
			url: "php-pdo/guardar.php",
                type: "post",
                dataType: "html",                
                cache: false,
                contentType: false,
	     processData: false	,
		 data: formData,
		  "success":function(data){
		  	$('#clientx').reset();
			$('#block').hide();
			$('#popupbox').hide();
			ordenar();
			cargar_all();	
		  }
		});
	}

		function borrar(id_imagen){
		$.ajax({
		  type: "POST",		
		  url: "php-pdo/borrar.php",
		  data: {id_imagen : id_imagen},
		  "success":function(data){
		  cargar_all();
		  }
		  });
	}
		function subir(){
		$.ajax({
		  type: "POST",		
		  url: "php-pdo/borrar.php",
		  data: {id_imagen : id_imagen},
		  "success":function(data){
		  cargar_all();
		  }
		  });
	}