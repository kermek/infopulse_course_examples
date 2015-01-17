<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
	</head>
	<body>
	</body>
	<script>
	var name = 'Jac1k';
	//var oRegExp = new RegExp("^[A-Z][a-z]{2,11}$");
	//var oRegExp = /^[A-Z][a-z]{2,11}$/;
	//var oRegExp = /([A-Z])([a-z]{2,11})/;
	//var oRegExp = /[A-Z]([a-z]{2,11})/;
	var oRegExp = /([A-Z])([a-z]{2,11})/;
	var result = name.match(oRegExp)
	alert(result);
	
	
	
	</script
</html>