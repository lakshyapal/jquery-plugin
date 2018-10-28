<?php

include 'inc_session.php';

$formdata = formatData(str_replace(array('\r\n', '\r', '\n', '\t'), "", json_encode($_POST)));

$query = "INSERT INTO `leads` (formdata) VALUES ('".$formdata."')";

if(mysql_query($query)){
	echo json_encode(array("result"=>"true"));
}else{
	echo json_encode(array("result"=>"false"));
}

?>