function ajaxTest(sSelector){
	var c = this;
	
	c.init(sSelector);
	c.a	= c.find('.b-calc__a');
	c.b	= c.find('.b-calc__flag');
	c.result	= c.find('.b-calc__result');
	
	c.showCountryFlag = function(event){
		event.preventDefault();
		$.ajax({
			 'url'		: 'ajaxcalc.php?t=' + new Date().getTime()
			,'method'	: 'POST'
			,'dataType'	: 'json'
			,'timeout'	: 1000
			,'data'		: {
				 'a': c.a.val()
				}
			,'success'	: function(oServerResponse){
				//c.result.html(oServerResponse.result);
				}
			,'error'	: function(oAjax){
				/*
				statusText == 'timeout'
				status == 401 | 403 | 404 | 500 | 503
				*/
				if (oAjax.status == 404){
						alert('AJAX backend is not found.');
					}
				else if (oAjax.statusText == 'timeout'){
					alert('AJAX request has timed out.');
					}
				else {
					alert('Totally unpredicted error.');
					}
				}
			,'complete'	: function(oAjax){
				var oServerResponse = oAjax.responseJSON;
				if (oAjax.status == 200){
					if (oServerResponse!=undefined){
						c.result.html(oServerResponse.result);
						c.b.attr({'src' : '../images/' + c.a.val() + '.png'});
						c.b.show();
						}
					else {
						alert('The server has returned an incorrect '
							+ 'response that cannot be parsed as JSON:\n'
							+ oAjax.responseText);
						}
					}
				}
			});
		}
	
	c.elem.bind('submit', c.showCountryFlag);
	}

	ajaxTest.prototype = new component();