app.controller('userCtrl',  function($scope, $http) {
/*
	$scope.form = {};
	$scope.form.fName = '';
	$scope.form.lName = '';
	$scope.form.passw1 = '';
	$scope.form.passw2 = '';
	$scope.form.id = 0;
	*/
	$scope.res='';
	
			
	$http.get("php/consulta.php")
		.success(function(res){
			console.log(res);
			$scope.users = res;
			//$scope.res = res;
	});  
	$http.get("php/consultaRubro.php")
		.success(function(res){
			console.log(res);
			$scope.rubros = res;
			//$scope.res = res;
	});  
	/*
	$scope.edit = true;
	$scope.remove = false; // Variable agregada para saber si estoy en modo de eliminación
	$scope.error = false;
	$scope.incomplete = false;

	$scope.editUser = function(id) {
		$scope.remove = false;
		
		if (id == 'new') {
			$scope.edit = true;
			$scope.incomplete = true;
			$scope.form={};
			$scope.res = '';
			$scope.form.id = 0;
			$scope.form.fName = '';
			$scope.form.lName = '';
			$scope.form.passw1 = '';
			$scope.form.passw2 = '';
		} else {
			$scope.edit = false;
			$scope.res = '';
			$scope.form.id = $scope.users[id].idtabla;
			$scope.form.fName = $scope.users[id].fName;
			$scope.form.lName = $scope.users[id].lName;
			$scope.form.passw1 = '';
			$scope.form.passw2 = '';
		}
	};
	
	$scope.deleteUser = function(id) {
		$scope.edit = false;
		$scope.remove = true;
		$scope.res = '';
		$scope.form.id = $scope.users[id].idtabla;
		$scope.form.fName = $scope.users[id].fName;
		$scope.form.lName = $scope.users[id].lName;
		$scope.form.passw1 = '';
		$scope.form.passw2 = '';
	};
	
	$scope.$watch('form.passw1',function() {$scope.test();});
	$scope.$watch('form.passw2',function() {$scope.test();});
	$scope.$watch('form.fName', function() {$scope.test();});
	$scope.$watch('form.lName', function() {$scope.test();});

	$scope.test = function() {
		if ($scope.form.passw1 !== $scope.form.passw2) {
			$scope.error = true;
			} else {
			$scope.error = false;
		}
		$scope.incomplete = false;
		if ($scope.edit && (!$scope.form.fName.length ||
		!$scope.form.lName.length ||
		!$scope.form.passw1.length || !$scope.form.passw2.length)) {
			$scope.incomplete = true;
		}
		if (!$scope.edit && (!$scope.form.passw1.length || !$scope.form.passw2.length)) {
			$scope.incomplete = true;
		}
	};
	
	$scope.enviar = function() {
		// Depende que haya seleccionado llamo a baja.php o a alta_modi.php
		if ($scope.remove) {
			$http.post("php/baja.php", $scope.form)
        	    .success(function(res){
					console.log(res);
					if (res == 'wrongpass') {
						// Si el password es incorrecto no permite elimina el registro y avisa al usuario
						$scope.res = 'Password incorrecto';
					} else {
						$scope.res = 'Registro eliminado';
						$scope.users = res;
						$scope.form={};
						$scope.form.id = 0;
						$scope.form.fName = '';
						$scope.form.lName = '';
						$scope.form.passw1 = '';
						$scope.form.passw2 = '';
						$scope.edit = true;
						$scope.remove = false;						
					}
        		});			
		} else {
			$http.post("php/alta_modi.php", $scope.form)
        	    .success(function(res){
					console.log(res);
					$scope.res = 'Datos actualizados';
					$scope.users = res;
					$scope.form={};
					$scope.form.id = 0;
					$scope.form.fName = '';
					$scope.form.lName = '';
					$scope.form.passw1 = '';
					$scope.form.passw2 = '';
        	});						
		}
	}
	*/
	
});