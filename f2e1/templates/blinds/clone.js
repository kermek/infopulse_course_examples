function b_blinds_gallery(sSelector){
	var c = this;
	c.blinds		= $(sSelector);
	c.count 		= 0;//счетчик
	c.blinds_number	= 12;//кол-во жалюзей
	c.blinds_width	= c.blinds.width()/c.blinds_number;//width 1-й жалюзи
	c.blinds_item	= c.blinds.find('.b-blinds__item.hidden').removeClass('hidden');//описание динамического объекта
	c.images		= c.blinds.find('.images'); 			//коллекция изображений для слайдера
	
	//создание жалюзей
	for(var i=0; i<c.blinds_number; i++){
		var leftPosition = c.blinds_width*i+'px';
		var blinds_item = c.blinds_item
			.clone()
			.css({'left':leftPosition})
			.children('.b-blinds__image')
				.css({'margin-left':'-'+leftPosition})
				.end();
		
		c.blinds.find('.cloning-area').append(blinds_item);
		}
	c.blinds_item.remove();
    c.blinds_images = c.blinds.find('.b-blinds__image');
	c.blinds_items	= c.blinds.find('.b-blinds__item');
	//размер картинки не превышает размер брока родителя
	c.blinds_images.css({'width':$('.container').width(), 'height':$('.container').height()})

	c.showImage	=	function(iImageNumber){
		c.count += 1;
		if ( c.count % 12 !== 1) return;
		iImageNumber += 1;
		if(iImageNumber > c.images.length - 1
			|| iImageNumber<0)
		{
			iImageNumber=0;
		}
		//alert(c.images[iImageNumber].src);
		c.blinds_images.attr(
			{'src':c.images[iImageNumber].src}
			);
		c.blinds_items.animate(
			{width:c.blinds_width+'px'}
			,5400
			,function(){
				console.log(c.images[iImageNumber])
				console.log(iImageNumber)
				c.blinds_items.width(0);
				//console.log(c.count)
				c.showImage(iImageNumber);	
				}
			);
	}
	c.showImage(0);
	
}