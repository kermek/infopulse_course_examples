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
		var picture = $(this);
		g.previewImage.attr(
			 'src'
			,picture.attr('src').replace('small_', '')
			);
		g.preview.toggleClass('b-preview_shown');
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
			,g.pictures.filter(':eq(' + g.current + ')').attr('src').replace('small_', '')
			);
		}
	g.closePreview = function(){
		g.preview.toggleClass('b-preview_shown');
		}
	
	g.pictures.click(g.showPreview);
	g.arrowPrev.click(g.showPrevious);
	g.arrowNext.click(g.showNext);
	g.preview.click(g.closePreview);
	}
	b_gallery.prototype = new component();