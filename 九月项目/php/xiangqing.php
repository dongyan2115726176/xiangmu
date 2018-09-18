<?php
	$hash = $_POST['hash'];
	
	include_once "help.php";
	
	$sql = "SELECT * FROM jiu1 WHERE stuID  = $hash";
	
	$result = mysqli_query($con,$sql);
	
	$arr = array();
	while ($row = mysqli_fetch_array($result)) {
	    $data = array();
	    $data['h1'] = $row['h1'];
	    $data['img'] = $row['img'];
	    $data['title'] = $row['title'];
	    $data['stuID'] = $row['stuID'];
	    array_push($arr,$data);
	}
	$json = json_encode(array("data"=>$arr));
	echo $json;
	mysqli_close($con);
