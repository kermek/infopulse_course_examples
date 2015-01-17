function b_form(sSelector){
	var f = this;
	
	// 1. Data =======================
	f.selector = sSelector;
	f.form = $(f.selector);
	
	// 2. Logic ======================
	f.showInfo = function(){
		var seasons = '';
		
		f.form
			.find('.b-form__season:checked')
			.each(function(){
				var season = $(this);
				
				seasons +=
					', '
					+ f.form.find('.b-form__label_season-' + season.val()).html();
				});
		
		alert(
			'Ваша форма:'
			+ '\nВаше имя:' + f.form.find('.b-form__name').val()
			+ '\nВаша фамилия: ' + f.form.find('.b-form__surname').val()
			+ '\nВаше любимое время года: ' + seasons.slice(2)
			+ '\nВаш любимый фрукт: ' + f.form.find('.b-form__label_fruit-' + f.form.find('.b-form__fruit:checked').val()).html()
			+ '\nВаше любимое животное: ' + f.form.find('.b-form__animals option:selected').text()
			+ '\nВаш отзыв: ' + f.form.find('.b-form__review').val()
		);
	}
	
	// 3. Events =====================
	f.form.find('.b-form__ok-button').click(f.showInfo)
	}