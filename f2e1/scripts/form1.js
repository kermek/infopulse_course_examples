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
			settings.get('b-form__yourform')
			+ '\n' + f.label('name')	 				+ ': ' + f.val('.b-form__name')
			+ '\n' + f.label('surname')	 				+ ': ' + f.val('.b-form__surname')
			+ '\n' + f.label('season')	 				+ ': ' + f.val('.b-form__season')
			+ '\n' + f.label('fruit')	 				+ ': ' + f.val('.b-form__fruit:checked')
			+ '\n' + f.label('animals')	 				+ ': ' + f.val('.b-form__animals > option:checked')
			+ '\n' + f.label('review')	 				+ ': ' + f.val('.b-form__review')
			+ '\n' + settings.get('b-form__languages')	+ ': ' + f.getLanguages()
			+ '\n' + 'ru'								+ ': ' + settings.get2('langs, 'ru')
		);
	}
	f.label = function(sName){
		return f.form.find('.b-form__label_' + sName).html();
		}
	f.val = function(sSelector){
		var elem = f.form.find(sSelector);
		var type = elem.attr('type');
		var tagName = elem.prop('tagName');
		var id = elem.attr('id');
		var name = elem.attr('name');
		
		// text, TEXTAREA
		if (type == 'text'
			|| tagName == 'TEXTAREA'
			){
				return elem.val();
			}
		// radio
		else if (type == 'radio'){
				return f.label(name + '-' + elem.val());
			}
		// OPTION
		else if (tagName == 'OPTION'){
				return elem.html();
			}
		// checkbox
		else if (type == 'checkbox') {
			var values = '';
			elem
				.filter(':checked')
				.each(function(){
					var checkbox = $(this);
					values +=
						(values?', ':'')
						+ f.label(name + '-' + checkbox.val());
					});
				return values;
			}
		}
	f.getLanguages = function(){
		var languages = ''
		
		$.each(
			settings.get('langs')
			, function(lang_code, lang_name){
				languages +=
					(languages ? '\n' : '')
					+ lang_code + '\t' + lang_name;	
				}
			);
		return languages;
		}
	f.getLanguage = function(sLanguage){
		var language = settings.get('langs')[sLanguage];
		return language;
		}
	// 3. Events =====================
	f.form.find('.b-form__ok-button').click(f.showInfo)
	}