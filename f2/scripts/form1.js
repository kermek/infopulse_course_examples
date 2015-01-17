function b_form(sSelector){

	var f = this;

	// 1. Секция данных (свойства)==============================================================================================================================================
	f.selector = sSelector;
	f.form = $(f.selector);
	
	if (!f.form.length)			// если нет длины (кол-ва) найденных элементов
		{
		alert("Can't find element by selector " + sSelector);
		return;
		}

	// 2. Секция логики ==============================================================================================================================================
	f.showInfo = function(){
		var seasons = '';
		
		f.form.find('.b-form__season:checked').each(function(){
			var season = $(this);
			seasons += 
					(seasons ? ', ' : '')											//', '
					+ season.val();
			});
		
		alert(
			settings.get('b-form__yourform') + ':'
			+ '\n' + f.label('name') + ': '						+ f.val('.b-form__name')		
			+ '\n' + f.label('surname') + ': '					+ f.val('.b-form__surname')
			+ '\n' + f.label('season') + ': '					+ f.val('.b-form__season')
			+ '\n' + f.label('fruit') + ': '					+ f.val('.b-form__fruit:checked')
			+ '\n' + f.label('animals') + ': '					+ f.val('.b-form__animals > option:checked')
			+ '\n' + settings.get('b-form__languages') + ': '	+ f.getLanguages()
			);
		}
	f.getLanguages = function (){
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
	f.val = function(sSelector){
		var elem = f.form.find(sSelector);
		var type = elem.attr('type');
		var tagName = elem.prop('tagName');
		
		// text, radio, OPTION, TEXTAREA
		if(type == 'text'
			|| type == 'radio'
			|| tagName == 'OPTION'
			|| tagName == 'TEXTAREA'
			){
				return elem.val();
			}
		// checkbox
		else if(type == 'checkbox'){
			var values = '';
			elem.filter(':checked').each(function(){
				var checkbox = $(this);
				values +=
					(values ?', ' : '')    //', '
					+ checkbox.val();
				});
			return values;
			}
		}
	f.label = function (sName){
		return f.form.find('.b-form__label_' + sName).html();
		}
	
	// 3. Секция событий =============================================================================================================================================

	// при щелчке по кнопке OK - показать информацию
	f.form.find('.b-form__ok-button').click(f.showInfo);

	}