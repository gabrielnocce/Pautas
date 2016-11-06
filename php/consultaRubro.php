<?php

require ('conexion.php');

$result = mysqli_query($conexion, "SELECT Distinct paurubro FROM pautas order by paurubro desc ") or die(msqli_error($conexion));

$datos = array();
$nro = 0;

while ($row = mysqli_fetch_assoc($result)){

	$datos[] = array(
		'id'          => $nro,
		'rubro'          => $row['paurubro'],
	);
	$nro++;
}

echo json_encode($datos);
?>