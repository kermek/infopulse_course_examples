function form_checker(sSelector){
	var f = this;
	
	f.init(sSelector);
	f.textFields 	= f.find('.b-textfield');		// '[type=text], textarea'
	f.message_error = f.find('.b-form__message_error');
	f.regexps		= settings.get('regexps');
	
	// ������� �������� �����
	f.check = function(event){
	var form_error = false;					// ���� ������� ������ �� �����
		
	// �������� ������� ��������� ���� �����
	f.textFields.each(function(){
		var textField = $(this);
		//var field_error = !textField.val();
		var sRegexp = f.regexps[textField.attr('name')];
		var oRegexp = new RegExp(sRegexp);
		var field_error = !textField.val().match(oRegexp);
		
		if (field_error) {
			form_error = true;
			}
		// �������� �� �������
		textField.toggleClass('b-textfield_error', field_error);
		/*if (!textField.val()){
			textField.addClass('b-textfield_error');
			}
		else{
			textField.removeClass('b-textfield_error');
			}
			*/
		});
	//f.message_error.stop().slideDown();
	f.message_error					// ���������� � ��������� �� ������
		.stop()						// ������������� ����� ���������� �������� �� ��
		[form_error 				// ������� ���� �� �������: ���� ���� ������ � ���������� �����
			? 'slideDown' 			// ����� �����
			: 'slideUp'				// ����� ��������
		]();
		
	event.preventDefault();			// �������� ������� �� ��������� - �������� �����
	}
	
	// ��� �������� ����� - ��������� �����
	f.elem.submit(f.check);
	}
	form_checker.prototype = new component();