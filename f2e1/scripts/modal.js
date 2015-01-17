function b_modal(sSelector)
{
var b = this;

b.init(sSelector);
b.open	        = b.find('.b-modal__open');
b.close         = b.find('.b-modal__close');
b.form	        = b.find('.b-modal__form');
b.mask	        = b.find('.b-modal__mask');
b.buttonOk      = b.find('.b-modal__button_ok');
b.buttonCancel  = b.find('.b-modal__button_cancel');

b.openModal = function(event){
	event.preventDefault();
	b.form.show();
	b.mask.show();
	$(document).bind('keyup', b.keyup);
}
b.closeModal = function(){
	b.form.hide();
	b.mask.hide();
	$(document).unbind('keyup', b.keyup);
}

b.keyup = function(event) {
  if (event.keyCode == 27) {	// esc
	b.closeModal();
	}
}
    
b.open          .bind('click', b.openModal);    
b.close         .bind('click', b.closeModal);    
b.buttonOk      .bind('click', b.closeModal);    
b.buttonCancel  .bind('click', b.closeModal);
}

b_modal.prototype = new component();