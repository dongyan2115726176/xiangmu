<?php
date_default_timezone_set('PRC');
$username = $_POST['user'];
$text = $_POST['text'];
$date = date('m月d日 h:i',time());
include_once 'help.php';
echo "连接成功";
$sqlStr1 = <<<sql1
INSERT INTO liu (username,text,date) values ("$username","$text","$date");
sql1;
$res1 = mysqli_query($con,$sqlStr1);
mysqli_close($con);
?>