function good(oGoodHTMLElement)
{
var g 	= this;
g.elem 	= oGoodHTMLElement;
g.id 	= 0;
g.getId = function(){
	if (!g.id) {
		g.id = g.elem.attr('class').match(/b-good_id_([0-9]{1,6})/)[1];
		}
	return g.id;
	}
g.inCart = function(){
	g.elem.addClass('b-good_in-cart');
	return g;
	}
g.getIdClassName = function(){
	return 'b-good_id_' + g.getId();
	}
}

function cart(sSelector, sCartSelector)
{
var c = this;

c.init(sSelector);
$.cookie.json = true;
//1. Data
c.cart				= $(sCartSelector);
c.vars({
		 'list'			: '.b-minicart__list'
		,'button'		: '.b-minicart__button'
		,'order'		: '.b-minicart__order'
		,'total'		: '.b-minicart__total'
		,'quantity'		: '.b-minicart__quantity'
	}, c.cart);
c.goods				= {/* good_id : qty */}; // quantity corresponds to good identificator
//2. Logic
c.add = function(event){
	event.preventDefault();
	var orderForm = $(this);
	var currentGood = orderForm.closest('.b-good');
	
	var addedGood = c.put(currentGood);
	
	c.goods[addedGood.getId()] = orderForm.find('.b-order-form__quantity').val();
	$.cookie('cartGoods', c.goods, { 'expires': 7, 'path': '/' });
	c.list.stop().slideDown();
	}
c.put = function(currentGood){
	var addedGood = new good(currentGood);
	// добавить товар в список в корзине
	var good_id_class = addedGood
							.inCart()			// подсветить товар, который есть в корзине 
							.getIdClassName();	// получить класс-идентификатор товара
	var existingGood = c.list.find('.' + good_id_class);
	var newGood = c.list.find('.b-good:first-child').clone();
	newGood.addClass(good_id_class);
	newGood.find('.b-good__image').attr('src', currentGood.find('.b-good__image').attr('src'));
	newGood.find('.b-good__name').html(currentGood.find('.b-good__name').html());
	newGood.find('.b-good__price').html(currentGood.find('.b-good__price').html());
	newGood.find('.b-order-form__quantity').val(currentGood.find('.b-order-form__quantity').val());
	c.list.find('.b-goods').append(newGood);
	return addedGood;
	}

c.copyData = function(currentGood, newGood, aSelectors){
	for (var selector in aSelectors) {
		var elem = currentGood.find(selector);
		var tagName = elem.prop('tagName');
		
		if (tagName == 'IMG') {
			newGood.find(selector).attr('src', elem.attr('src'));
			}
		else if (tagName == 'INPUT') {
			newGood.find(selector).val(elem.val());
			}
		else {
			newGood.find(selector).html(elem.html());
			}
		}
	}
c.copyData = function(oSource, oDestination, aSelectors){
	$.each(aSelectors, function(i, sSelector){
		var oSourceElement = oSource.find(sSelector); 			// копируемый элемент
		var oDestinationElement = oDestination.find(sSelector); // элемент назначение
		var tagName = oSourceElement.prop('tagName');
		
		if (tagName == 'IMG') {
			oDestinationElement.attr('src', oSourceElement.attr('src'));
			}
		else if (tagName == 'INPUT'
			|| 	 tagName == 'TEXTAREA') {
			oDestinationElement.val(oSourceElement.val());
			}
		else {
			oDestinationElement.html(oSourceElement.html());
			}
		});
	}
	
c.load = function(){
	if ($.cookie('cartGoods') != undefined) {
		c.goods = $.cookie('cartGoods');
		}
	for (var goodId in c.goods) {
		var currentGood = c.find('.b-good_id_' + goodId);
		c.put(currentGood);
		currentGood.find('.b-order-form__quantity').val(c.goods[goodId]);
		}
	c.list.stop().slideDown();
	}

c.load();
//3.Events
//При отправке формы заказы отправлять товар в корзину
c.find('.b-order-form').bind('submit', c.add);
// найти формы заказа событие отправки формы с добавлением товара в корзину
}

cart.prototype = new component();