    var m1 = new b_menu('#menu1');
	
	function b_menu(sSelector) {
	var m = this;			// ссылка на весь объект b_menu
  
	// 1. Секция данных ============================================================================================================================================
	m.menu = $(sSelector);
	
	// 2. Секция логики ============================================================================================================================================
	m.toggleSubmenu = function(oSubmenu){
		oSubmenu.stop().slideToggle();
	};
	m.showSubmenu = function() {
		m.toggleSubmenu($(this).children('.b-submenu'));
		};
	m.hideSubmenu = function() {
		m.toggleSubmenu($(this).children('.b-submenu'));
		};

	// 3. Секция событий ===========================================================================================================================================
	m.menu.find('.b-menu__item')
		.mouseover(m.showSubmenu)
		.mouseout(m.hideSubmenu);
	};