function component()
{
this.elem = null;

this.init = function(sSelector){
	this.elem 		= $(sSelector);
	
		if (!this.elem.length)		// если нет длины (кол-ва) найденных элементов
		{
		alert("Can`t find element by selector " + sSelector);
		}
	}
	
this.find = function(sSelector){
	return this.elem.find(sSelector);
	}
this.vars = function(aElements, oHTMLElement){
	for (var propertyName in aElements){
		var sSelector = aElements[propertyName];
		this[propertyName] = oHTMLElement.find(sSelector);
		}
	}

this.copyData = function(oSource, oDestination, aFieldNames){
	$.each(aFieldNames, function(i, fieldName){
		var oSourceElement 		= oSource		.find(fieldName);
		var oDestinationElement = oDestination	.find(fieldName);
		var tagName 			= oSourceElement.prop('tagName');
		
		if (tagName=='IMG'){			// oSource.is('img')	// если источник - изображение
			oDestinationElement.attr('src'
				,oSourceElement.attr('src')
				);
			}
		else if (tagName == 'INPUT' 
			  || tagName == 'TEXTAREA'){						// если это - поле ввода
			oDestinationElement.val(
				 oSourceElement.val()
				);
			}
		else {													// иначе - парный содержательный тег
			oDestinationElement.html(
				 oSourceElement.html()
				 );
			}		
		});

	}
}