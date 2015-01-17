<?
//header('HTTP/1.1 403 Forbidden');
header("Content-Type: application/json;charset=UTF-8");
include("calc.php");
//sleep(5);
?>{"result":"<?= $result?>"}