<?php
include_once "help.php";
// 查找pinglun表所有的数据
$selStr = "SELECT * FROM liu";
$result = mysqli_query($con,$selStr);
while ($rows = mysqli_fetch_array($result)) {
    echo "<li>
	<div></div><div>".
        "<span class='mz'>昵称：{$rows['username']}</span><br />".
        "<span>内容：{$rows['text']}</span>".
        "<p class='time'><span>{$rows['date']}</span><a href='javascript:;'>删除</a></p></div>".
        "</li>";
}
