function events(sSelector)
{
var e = this;

e.showCoords	= function(event){
	e.coordX.html(event.pageX);
	e.coordY.html(event.pageY);
	e.target.html($(event.target).attr('class'));
	
	
	// из координаты события в пределах страницы вычитаем позицию зеленого блока (e.elem)
	e.coordXrel.html(event.pageX - e.elem.position().left);
	e.coordYrel.html(event.pageY - e.elem.position().top);
	}
e.clickPad		= function(event){
	console.log('Click PAD');
	}
e.clickX		= function(event){
	console.log('Click Coord X');
	event.stopPropagation();
	}
e.showKeyInfo	= function(event){
	e.keyinfo.html(event.which + ' ' + event.ctrlKey);
	}
e.main			= function(event){
	e.init(sSelector);
	
	e.coordX	= e.find('.b-pad__coord_x');
	e.coordY	= e.find('.b-pad__coord_y');
	e.target	= e.find('.b-pad__coord_target');
	e.coordXrel	= e.find('.b-pad__coord_x-relative');
	e.coordYrel	= e.find('.b-pad__coord_y-relative');
	e.keyinfo	= e.find('.b-pad__coord_keyinfo');
	e.text		= e.find('.b-pad__text');
	
	e.elem	.bind('mousemove',	e.showCoords);
	e.elem	.bind('mousedown',	e.clickPad);
	e.coordX.bind('mousedown', 	e.clickX);
	e.text	.bind('keydown', 	e.showKeyInfo);
	}

$(document).ready(e.main);
}

events.prototype = new component();