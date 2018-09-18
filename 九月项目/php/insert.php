<?php
	$h4 = $_POST['h4'];
	$title = $_POST['title'];
	$icon_text1 = $_POST['icon_text1'];
	$time = $_POST['time'];
	$m1 = $_POST['m1'];
	$m2 = $_POST['m2'];
	$m3 = $_POST['m3'];
	include_once "help.php";
	$sqlStr1 = <<<sql1
INSERT INTO jiu (h4,title,icon_text1,time,m1,m2,m3) values ("$h4","$title","$icon_text1","$time","$m1","$m2","$m3");
sql1;
$res1 = mysqli_query($con,$sqlStr1);
if (!$res1){
    echo "插入数据库失败".mysqli_error($con);
}
echo "插入数据库成功";
// 查询
mysqli_close($con);