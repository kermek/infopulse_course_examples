<?
	header("Content-Type: text/html; charset=UTF-8");
?>
<html>
	<head>
		<title>Dropdown menu</title>
		<link rel='stylesheet' href='/f2e1/stylesheets/menu.css'>
	</head>
	<body>
		<ul class='b-menu' id='menu1'>
			<li class='b-menu__item'><a href='' class='b-menu__link'>File</a>
				<ul class='b-submenu'>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>Create</a>
						<ul class='b-submenu'>
							<li class='b-submenu__item'><a href='' class='b-menu__link'>Create 1</a></li>
							<li class='b-submenu__item'><a href='' class='b-menu__link'>Create 2</a></li>
							<li class='b-submenu__item'><a href='' class='b-menu__link'>Create 3</a></li>
						</ul>
					</li>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>Open</a></li>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>Close</a></li>
				</ul>
			</li>
			<li class='b-menu__item'><a href='' class='b-menu__link'>Edit</a></li>
			<li class='b-menu__item'><a href='' class='b-menu__link'>View</a>
				<ul class='b-submenu'>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>Table</a></li>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>Icons</a></li>
					<li class='b-submenu__item'><a href='' class='b-menu__link'>List</a></li>
				</ul>
			</li>
		</ul>
	</body>
	<script src='/f2e1/scripts/jquery-1.11.1.min.js'></script>
	<script src='/f2e1/scripts/menu.js'></script>
	<script>
		var m1 = new b_menu('#menu1');
	</script>
</html>