<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/31
 * Time: 7:44
 */
include_once "help.php";
mysqli_select_db($con,"jiu1");
$page = $_POST["P"];
$pageSize = 6;
$total_sql="SELECT COUNT(*)FROM jiu1";
$total_result=mysqli_fetch_array(mysqli_query($con,$total_sql));
$total=$total_result[0];
$total_pages=ceil($total/$pageSize);
//编写sql获取分页数据 SELECT * FROM 表名 LIMIT 起始位置，显示条数
$sql="SELECT * FROM jiu1 order by id ASC LIMIT ".($page-1)*$pageSize .",{$pageSize}";
$result1=mysqli_query($con,$sql);
$arr = array();
while ($row = mysqli_fetch_array($result1)) {
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