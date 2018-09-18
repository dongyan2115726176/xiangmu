<?php
	$h1 = $_POST['h1'];
	$img = $_POST['img'];
	$title = $_POST['title'];
	$stuID = $_POST['stuID'];
	include_once "help.php";
	$sqlStr1 = <<<sql1
INSERT INTO jiu1 (h1,img,title,stuID) values ("$h1","$img","$title","$stuID");
sql1;
$res1 = mysqli_query($con,$sqlStr1);
if (!$res1){
    die("插入数据库失败".mysqli_error($con));
}
echo "插入数据库成功";
// 查询
mysqli_close($con);