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
$keyword = $_POST["keyword"];
$pageSize = 6;
$total_sql="SELECT COUNT(*)FROM jiu";
$total_result=mysqli_fetch_array(mysqli_query($con,$total_sql));
$total=$total_result[0];
$total_pages=ceil($total/$pageSize);

$keywordStr = "select * from jiu1 where h1 like '%$keyword%' LIMIT ".($page-1)*$pageSize .",{$pageSize}";
$result1=mysqli_query($con,$keywordStr);
$arr = array();
while ($row = mysqli_fetch_array($result1)) {
    $data = array();
    $data['h1'] = $row['h1'];
    $data['img'] = $row['img'];
    $data['title'] = $row['title'];
    array_push($arr,$data);
}
$json = json_encode(array("data"=>$arr));
echo $json;
mysqli_close($con);