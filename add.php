<?php
//包含连接数据库的公共文件
require_once("./conn.php");

    //获取表单提交数据
	$data	= json_decode(file_get_contents('php://input'));
    
	$name	= $data->name;
	$sex	= $data->sex;
	$age 	= $data->age;
	$edu 	= $data->edu;
	$salary = $data->salary;
	$bonus 	= $data->bonus;
	$city 	= $data->city;
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