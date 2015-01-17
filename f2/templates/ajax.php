<?
include("calc.php");

header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<!--
		<link rel='stylesheet' href='../stylesheets/ajax.css'>
		-->
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-2.1.1.min.js'></script>
	</head>
	<body>

		<form action="ajax.php" method="POST" 		class='b-calc' id='calc1'>
			<input type='text' name='a' 	class='b-calc__a' value='<?= $a?>'> + 
			<input type='text' name='b' 	class='b-calc__b' value='<?= $b?>'>
			<input type='submit' value='=' 	class='b-calc__count'>
			<span 							class='b-calc__result'><?= $result?></span>
		</form>
	
	
		
	</body>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/ajax.js'></script>
	
	<script>
	var c1 = new ajaxTest('#calc1');
	</script>
</html>