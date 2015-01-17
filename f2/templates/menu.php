<?
	header("Content-Type: text/html; charset=UTF-8");
?>
<html>
  <head>
    <title>Выпадающее меню</title>
	<link rel="stylesheet" href='/f2/stylesheets/menu.css'>
  </head>
  
  <body>
    <ul class ='b-menu' id='menu1'>
	  <li class='b-menu__item'><a href='' class='b-menu__link'>Файл</a>
	    <ul class='b-submenu'>
	      <li class='b-submenu__item'><a href='' class='b-menu__link'>Создать</a></li>
		  <li class='b-submenu__item'><a href='' class='b-menu__link'>Открыть</a></li>
		  <li class='b-submenu__item'><a href='' class='b-menu__link'>Закрыть</a></li>
	    </ul>
      </li>
	  <li class='b-menu__item'><a href='' class='b-menu__link'>Правка</a></li>
	  <li class='b-menu__item'><a href='' class='b-menu__link'>Вид</a>
	    <ul class='b-submenu'>
	      <li class='b-submenu__item'><a href='' class='b-menu__link'>Таблица</a></li>
		  <li class='b-submenu__item'><a href='' class='b-menu__link'>Значки</a></li>
		  <li class='b-submenu__item'><a href='' class='b-menu__link'>Список</a></li>
	    </ul>
	  </li>
	</ul>
  </body>
  <script src='/f2/scripts/jquery-2.1.1.min.js'></script>
  <script src='/f2/scripts/menu.js'></script>
  <script>
    var m1 = new b_menu('#menu1');
  </script>
 </html>