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
/*
c.list				= c.cart.find('.b-minicart__list');
c.button			= c.cart.find('.b-minicart__button');
c.order				= c.cart.find('.b-minicart__order');
c.total				= c.cart.find('.b-minicart__total');
c.quantity			= c.cart.find('.b-minicart__quantity');
*/
/*
c.vars({
		'list'			: '.b-minicart__list'
		,'button'		: '.b-minicart__button'
		,'order'		: '.b-minicart__order'
		,'total'		: '.b-minicart__total'
		,'quantity'		: '.b-minicart__quantity'
	}, c.cart); //place where to find
// Написать функцию,
	// на входе массив и объект для поска,
	// на выходе - нахождение элементов по селекторам в объекте из 2-го параметра
	// и сохраняет их в переменные (свойства), которые находятся в ключах в текущий объект
*/
//2. Logic
c.add = function(event){
	event.preventDefault();
	var orderForm = $(this);
	var currentGood = orderForm.closest('.b-good');
	
	var addedGood = c.put(currentGood);
	
	//alert(addedGood.getId() + ' ' + orderForm.find('.b-order-form__quantity').val());
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
	if (existingGood.length) {
			c.copyData(currentGood, existingGood, ['.b-order-form__quantity']);
		}
	else {
		var newGood = c.list.find('.b-good:first-child').clone();
		newGood.addClass(good_id_class);
		c.copyData(currentGood, newGood, [
			'.b-good__image'		
			,'.b-good__name'		
			,'.b-good__price'		
			,'.b-order-form__quantity'
			]);
		/*	
		newGood.find('.b-good__image').attr('src', currentGood.find('.b-good__image').attr('src'));
		newGood.find('.b-good__name').html(currentGood.find('.b-good__name').html());
		newGood.find('.b-good__price').html(currentGood.find('.b-good__price').html());
		newGood.find('.b-order-form__quantity').val(currentGood.find('.b-order-form__quantity').val());
		*/
		c.list.find('.b-goods').append(newGood);
		}
	return addedGood;
	}

c.load = function(){
	c.goods = $.cookie('cartGoods');
	if (c.goods) {
		// для каждого элемента в массиве c.goods представленного как пара:
		// id'у товара соответствует количество
		$.each(c.goods, function(goodId, goodQuantity){
			c.put(
				c.find('.b-good_id_' + goodId) 							// currentGood
					.find('.b-order-form__quantity').val(goodQuantity)	// quantity
				 .end()													// currentGood 
				);
			/*
			var currentGood = c.find('.b-good_id_' + goodId)
							   .find('.b-order-form__quantity').val(goodQuantity);
			c.put(currentGood);
			*/
			});
		}
	else {
		c.goods = {};
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