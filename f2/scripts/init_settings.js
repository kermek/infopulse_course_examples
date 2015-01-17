var _init_settings = {
	 'b-form__yourform'		: 'Ваша форма'
	,'b-form__languages'	: 'Языки'
	,'langs' : {
			 'ru' : 'Русский'
			,'en' : 'Английский'
			,'ua' : 'Украинский'
			,'de' : 'Немецкий'
			,'it' : 'Итальянский'
			}
	,'regexps' : {
			// имени поля соответствует РВ
			 'name' : '^[А-ЯЁа-яё \\-]{1,20}$'
			,'brand' : '^[A-Za-zА-ЯЁа-яё0-9 \\-\'&.]{1,80}$'
			,'price' : '^[0-9]{1,5}(\\.[0-9]{2})?$'
			,'description' : '^[\\x0-\\xFF\r\n]{10,100}$'
			}
	};
	
	settings.init(_init_settings);