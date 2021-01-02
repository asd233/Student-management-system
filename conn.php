<?php
//(1)数据库配置信息
$db_host = "localhost";	//主机名  localhost:3306
$db_port = "3306";		//端口号
$db_user = "root";		//用户名
$db_pass = "";		//密码
$db_name = "student";	//数据库名
$charset = "utf8";		//字符集

//(2)PHP连接MySQL服务器
if(!$link = @mysqli_connect($db_host.":".$db_port,$db_user,$db_pass))
{
    header(':', true, 504);header('X-PHP-Response-Code: 504', true, 504);
	// echo "<h2>PHP连接MySQL服务器失败！</h2>";
	// echo "系统错误信息：".mysqli_connect_error();
	die(); //中止程序向下运行
}

//(3)选择当前数据库
if(!mysqli_select_db($link,$db_name))
{
	// echo "<h2>选择数据库{$db_name}失败！</h2>";
	die();
}

//(4)设置数据库返回数据字符集
mysqli_set_charset($link,$charset);