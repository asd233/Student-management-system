<?php
    //包含连接数据库的公共文件
    require_once("./conn.php");
    
    //每页显示多少条
    $pagesize = 15;
    //获取当前页码和计算开始行号
    $page = isset($_GET['page']) ? $_GET['page'] : 1; //当前页码
    $startRow = ($page-1)*$pagesize; //开始行号
    //获取总记录数和计算总页数
    $sql = "SELECT * FROM student";
    $result = mysqli_query($link,$sql);
    $records = mysqli_num_rows($result);
    $pages = ceil($records/$pagesize);
    
    //构建查询的分页的SQL语句
    $sql .= " ORDER BY id LIMIT {$startRow},{$pagesize}";
    //执行SQL语句，并返回结果集对象
    $result = mysqli_query($link,$sql);
    //从结果集中获取多行数据
    $arrays = mysqli_fetch_all($result,MYSQLI_ASSOC);
    class returnObj {
       var $arr;
       var $records;
       var $pagesize;
    };
    $returnObj = new returnObj();
    $returnObj->arr = $arrays;
    $returnObj->pagesize = $pagesize;
    $returnObj->records = $records;

    echo json_encode($returnObj);
?>  