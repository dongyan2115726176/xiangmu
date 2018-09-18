<?php
include_once "help.php";
$username = $_POST['username'];
$delStr = "DELETE FROM liu WHERE username ='{$username}'";
var_dump($delStr);
$result = mysqli_query($con,$delStr);
mysqli_close($con);