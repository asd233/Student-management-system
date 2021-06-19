<?php
//包含连接数据库的公共文件
require_once("./conn.php");
$data	= json_decode(file_get_contents('php://input'));

	//获取表单提交数据
    $userName = $data->userName;
	$passWord = $data->passWord;
    
	//构建插入的SQL语句
	$sql = "SELECT * FROM account WHERE userName = ".$userName." and passWord = ".$passWord;
	//判断SQL语句是否执行成功
	// if(mysqli_query($link,$sql))
	// {
	// 	echo "true";
	// 	die(); //中止程序向下运行
    // }else{
    //     echo "false";
    // }
    $result = mysqli_query($link,$sql);
    if($result === FALSE){
        echo "yes";
    }else{
        echo "no";
    }
?>
