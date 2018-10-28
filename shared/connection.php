<?
$host="localhost";
$userName="root";
$passWord='';
$dbName="service";

@$db=mysql_connect($host,$userName,$passWord);
mysql_select_db($dbName);

?>