<?php

require ('conexion.php');

$result = mysqli_query($conexion, "SELECT * FROM pautas order by pauPeriodo desc limit 10") or die(msqli_error($conexion));

$datos = array();
$nro = 0;

while ($row = mysqli_fetch_assoc($result)){

	$datos[] = array(
		'id'          => $nro,
		'pauId'          => $row['pauId'],
		'pauOrden'     => $row['pauOrden'],
		'pauTotal'       => $row['pauTotal'],
		'pauDescripcion'       => $row['pauDescripcion'],
		'pauRubro'       => $row['pauRubro'],
		'pauTipoOrden'       => $row['pauTipoOrden'],
		'pauPeriodo'       => $row['pauPeriodo'],		
		'pauProveedor'       => $row['pauProveedor'],		
		
		
	);
	$nro++;
}

echo json_encode($datos);
?>