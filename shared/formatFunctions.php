<?





function formatData($string)

{

    $string = trim($string);

    $string = addslashes($string);

    return $string;

}	



function unFormatData($string)

{

    $string = stripslashes($string);

    $string = strip_only($string, '<style>');

    $string = str_replace('../uploads/' , 'uploads/', $string);

    return $string;

}



?>

