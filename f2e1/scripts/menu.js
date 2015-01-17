function b_menu(sSelector){
	var m = this;
	
	// 1 Data
	m.menu = $(sSelector);
	
	// 2 Logic
	m.toggleSubmenu = function(oSubmenu){
		oSubmenu.stop().slideToggle();
		}
	m.showSubmenu = function(){
		m.toggleSubmenu($(this).children('.b-submenu'));
		}
	m.hideSubmenu = function(){
		m.toggleSubmenu($(this).children('.b-submenu'));
		}

	// 3 Events
	m.menu.find('.b-menu__item')
		.mouseover(m.showSubmenu)
		.mouseout(m.hideSubmenu);
	m.menu.find('.b-submenu__item')
		.mouseover(m.showSubmenu)
		.mouseout(m.hideSubmenu);
	}