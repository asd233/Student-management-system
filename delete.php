<?php
//包含连接数据库的公共代码
require_once("./conn.php");

//获取地址栏传递的ID
$id = $_GET['id'];
//构建删除的SQL语句
$sql = "DELETE FROM student WHERE id=$id";
//执行SQL语句
if(mysqli_query($link,$sql))
{
	echo true;
	die(); //中止程序向下运行
}else{
    echo false;
}
