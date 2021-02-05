<?php
//包含连接数据库的公共文件
require_once("./conn.php");
$data	= json_decode(file_get_contents('php://input'));

	//获取表单提交数据
    $id = $data->id;
	$name	= $data->name;
	$sex	= $data->sex;
	$age 	= $data->age;
	$edu 	= $data->edu;
	$salary = $data->salary;
	$bonus 	= $data->bonus;
    $city 	= $data->city;
    
	//构建插入的SQL语句
	$sql = "UPDATE student SET name='$name',sex='$sex',age=$age,edu='$edu',salary=$salary,bonus=$bonus,city='$city' where id=$id";
	//判断SQL语句是否执行成功
	if(mysqli_query($link,$sql))
	{
		echo "记录修改成功！";
		die(); //中止程序向下运行
    }else{
        echo "记录修改失败！";
    }
// }
?>
