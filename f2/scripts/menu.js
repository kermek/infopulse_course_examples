function b_menu(sSelector) {
	var m = this;			// ссылка на весь объект b_menu
  
	// 1. Секция данных ============================================================================================================================================
	m.menu = $(sSelector);
	
	
	// 2. Секция логики ============================================================================================================================================
	// Данная функция работает при плавно выпадающем меню
	/*
	m.toggleSubmenu = function(oSubmenu){
		//  Показ/сокрытие с помощью .slideToggle(), stop() требует остановки предыдущих анимаций
		//  oSubmenu - это переданная ссылка на JQuery объект
		oSubmenu.stop().slideToggle();
	};
	*/
	
	m.showSubmenu = function() {
		//  Показ с помощью .show()
		//$(this).children('.b-submenu').show();

		//  Показ с помощью .addClass(), без точки, т.к. это не селектор, а имя
		//$(this).children('.b-submenu').addClass('b-submenu_shown');

		//  Показ с помощью .slideDown(), stop() требует остановки предыдущих анимаций
		//$(this).children('.b-submenu').stop().slideDown();

		//  Показ с помощью .slideToggle(), $(this).children('.b-submenu') это сслыка на элемент с подменю
		//m.toggleSubmenu($(this).children('.b-submenu'));
		
		// Вариант с анимацией
		$(this).children('.b-submenu')
			.stop()
			.css(
				{
					'display' : 'block'
				}
				)
			.animate(
				{
					'opacity' : 1
				}
				,400
				);
		};
	
	m.hideSubmenu = function() {
		//  Сокрытие с помощью .show()
		//$(this).children('.b-submenu').hide();

		//  Сокрытие с помощью .removeClass(), без точки, т.к. это не селектор, а имя
		//$(this).children('.b-submenu').removeClass('b-submenu_shown');

		//  Сокрытие с помощью .slideUp(), stop() требует остановки предыдущих анимаций
		//$(this).children('.b-submenu').stop().slideUp();

		//  Показ с помощью .slideToggle(), $(this).children('.b-submenu') это сслыка на элемент с подменю
		//m.toggleSubmenu($(this).children('.b-submenu'));
		// Вариант с анимацией
		$(this).children('.b-submenu')
			.stop()
			.animate(
				{
					'opacity' : 0
				}
				,400
				,function(){
					$(this)
						.css(
							{
								'display' : 'none'
							}
							);
						}
				);
;
		};

	// 3. Секция событий ===========================================================================================================================================

	//Варианты записи обработки событий: отдельными строками или в одной команде
	//m.menu.find('.b-menu__item').mouseover(m.showSubmenu);
	//m.menu.find('.b-menu__item').mouseout(m.hideSubmenu);

	m.menu.find('.b-menu__item')
		.mouseover(m.showSubmenu)
		.mouseout(m.hideSubmenu);
	};