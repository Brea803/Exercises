<?php

if(isset($_GET["submit"])){
	$txt1 = $_GET["txt1"];
	$txt2 = $_GET["txt2"];
	$txt3 = $_GET["txt3"];

}else{
	echo "submission not found";
}
?>

<!DOCTYPE html>
<html>
<head>
</head>

<body>
<?php
	
	echo "Your first variable is " . $txt1 . "your second variable is " . $txt2;
	if($txt1 == "hello"){
		echo "You're great!";
	}else{
		echo "You're awesome!";
	}
?>

</body>
</html>
