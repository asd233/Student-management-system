<?php
//包含连接数据库的公共文件
require_once("./conn.php");

	//获取表单提交数据
	$name	= $_POST['name'];
	$sex	= $_POST['sex'];
	$age 	= $_POST['age'];
	$edu 	= $_POST['edu'];
	$salary = $_POST['salary'];
	$bonus 	= $_POST['bonus'];
	$city 	= $_POST['city'];
	//构建插入的SQL语句
	$sql = "INSERT INTO student VALUES(null,'$name','$sex',$age,'$edu',$salary,$bonus,'$city')";
	//判断SQL语句是否执行成功
	if(mysqli_query($link,$sql))
	{
		echo "记录添加成功！";
		die(); //中止程序向下运行
	}else{
     echo "您输入的数据格式有误，请检查后再次提交";   
    }
?>