<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/20
 * Time: 9:21
 */
header("content-Type:text/html;charset=utf-8");
define("HOST","127.0.0.1");
define("USERNAME",'root');
define("PWD",'');
define("DBNAME",'cangku');
define("CHARSET",'utf8');
//连接数据库
$con = mysqli_connect(HOST,USERNAME,PWD,DBNAME) or die("数据库连接失败,<span style='color:red;'>".mysqli_error()."</span>");

mysqli_set_charset($con,CHARSET);

