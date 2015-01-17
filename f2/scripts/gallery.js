function b_gallery(sSelector){
	var g = this;

	g.init(sSelector);

	g.pictures		= g.find('.b-picture__image');
	g.arrowPrev		= g.find('.b-preview__arrow_prev');
	g.arrowNext		= g.find('.b-preview__arrow_next');
	g.preview		= g.find('.b-preview');
	g.previewImage	= g.find('.b-preview__image');
	
	g.current		= 0;
	g.qty			= g.pictures.length;
	
	g.showPreview = function(){
		g.preview.addClass('b-preview_shown');
		g.current = g.pictures.index($(this));
		g.showImage(0);
		}
	g.showPrevious = function(){
		g.showImage(-1);
		}
	g.showNext = function(){
		g.showImage(+1);
		}
	g.showImage = function(iShift){
		g.current += iShift;
		g.previewImage.attr(
			 'src'
			,g.pictures.filter(':eq('+g.current+')').attr('src').replace('small_', '')
			);
		}
	g.closePreview = function(event){
		if ($(event.target).hasClass('b-preview')) {
			g.preview.removeClass('b-preview_shown');
			}
		}

	g.pictures.click(g.showPreview);	// при щелчке по изображению				- показать просмотр
	g.arrowPrev.click(g.showPrevious);	// при щелчке по стрелке "предыдущая"		- показать предыдущее изображение
	g.arrowNext.click(g.showNext);		// при щелчке по стрелке "следующая"		- показать следующее изображение
	g.preview.click(g.closePreview);	// при щелчке по затенению блока preview	- закрыть просмотр
	}
	
	b_gallery.prototype = new component();