function good(oGoodHTMLElement){
	var g = this;
	g.elem  = oGoodHTMLElement;
	g.id 	= 0;
	g.getId = function(){
		if (!g.id){
			g.id = g.elem.attr('class').match(/b-good_id_(\d{1,7})/)[1]
			}

		return g.id;
		}
	g.inCart = function (){
		g.elem.addClass('b-good_in-cart');
		return g;
		}
	g.getIdClassName = function(){
		return 'b-good_id_'+g.getId();
		}
}

function cart(sSelector, sCartSelector) {
var c = this;
// 1. Секция данных (свойства, переменные принадлежащие объекту) ===================================================================
c.init(sSelector);
$.cookie.json=true;
c.cart		= $(sCartSelector);
c.goods		= {/* good_id : qty*/};
c.vars({
		 'list' 		: '.b-minicart__list'
		,'button'		: '.b-minicart__button'
		,'order'		: '.b-minicart__order'
		,'total'		: '.b-minicart__total'
		,'quantity'		: '.b-minicart__quantity'
	}, c.cart);
/* 
//Написать функцию, 
	на входе массив и объект для поиска, 
	на выходе - нахождение элементов по селекторам 
	в объекте из 2-го параметра
	и сохраняет их в переменные (свойства), которые 
	находятся в ключах в текущий объект
	
 */

// 2. Секция логики  ===================================================================
c.add = function(event){
	event.preventDefault();
	var orderForm = $(this);
	var currentGood = orderForm.closest('.b-good');

	var addedGood = c.put(currentGood);
	
/* 	alert (
		addedGood.getId() 
		+ ' ' 
		+orderForm.find('.b-order-form__quantity').val()
		); */
	
	c.goods[addedGood.getId()]= orderForm.find('.b-order-form__quantity').val();
	
	$.cookie('cartGoods',c.goods, { "expires": 7, "path": "/" });
	c.showTotal();
	c.list.stop().slideDown();
}

c.deleteButton = function(event){
	event.preventDefault();
	var orderForm = $(this).parent();
	var currentGood = orderForm.closest('.b-good');
	delete c.goods[currentGood.attr('class').match(/b-good_id_(\d{1,7})/)[1]];
	currentGood.remove();
	
	$.cookie('cartGoods',c.goods, { "expires": 7, "path": "/" });
	c.showTotal();
	}

c.put = function(currentGood){
	var addedGood = new good(currentGood);	
	addedGood.inCart();
	
	// добавить товар в список в корзине
	var good_id_class = addedGood.getIdClassName();
	var existingGood = c.list.find('.'+good_id_class);
		if (existingGood.length)
		{
		c.copyData(currentGood, existingGood, ['.b-order-form__quantity']); 
		}
		else
		{
		var newGood = c.list.find('.b-good:first-child').clone();		// TR
		newGood.addClass(good_id_class);
		
		c.copyData(currentGood, newGood, [
			 '.b-good__image'
			,'.b-good__name'
			,'.b-good__price'
			,'.b-order-form__quantity'
			]);

		c.list.find('.b-goods').append(newGood);	
		}
	
	return addedGood;
	}

c.cartShowHide = function() {
	c.list.stop().slideToggle();
	/*
	if (c.list.css('display') == 'none') {
		c.list.stop().slideUp();
		}
	else {
		c.list.stop().slideDown();
		}
	*/
	}
	
c.plus = function(){
	var plus = $(this);
	var orderForm = plus.parent();
	var quantity = + orderForm.find('.b-order-form__quantity').val() + 1;
	orderForm.find('.b-order-form__quantity').val(quantity);
	}	

c.minus = function(){
	var plus = $(this);
	var orderForm = plus.parent();
	var quantity = + orderForm.find('.b-order-form__quantity').val() - 1;
	if (quantity >= 0) {
		orderForm.find('.b-order-form__quantity').val(quantity);
		}
	}	
	
c.showTotal = function(){
	var totalQuantity = 0;
	var totalSum = 0;
	$.each(c.goods, function(good_id, quantity){
		var currentGood = c.find('.b-good_id_'+good_id);
		totalQuantity += +quantity;
		totalSum += +currentGood.find('.b-good__price').html();
		});
	c.quantity.html(totalQuantity);
	c.total.html(totalSum);
	}
	
c.load = function(){
	c.goods = $.cookie('cartGoods');
	if (c.goods){
		// для каждого элемента в массиве c.goods представленного как пара: 
		// id`у товара соответствует количество
		$.each(c.goods, function(good_id, quantity){		
			var currentGood = c.find('.b-good_id_'+good_id);
			currentGood.find('.b-order-form__quantity').val(quantity);
			c.put(currentGood);
			})		
		c.showTotal();
		}
	else {
		c.goods = {};
		}
	}
	
c.load();
// 3. Секция событий ===================================================================
//При отправке формы заказа, добавлять товар в корзину

c.find('.b-order-form').bind('submit', c.add);
// найти формы заказа и связать событие отправки формы с добавлением товара в корзину

c.button.bind('click', c.cartShowHide);
c.find('.b-order-form__plus').bind('click', c.plus);
c.find('.b-order-form__minus').bind('click', c.minus);
c.cart.find('.b-good__delete').bind('click', c.deleteLink);
c.cart.find('.b-order-form__delete').bind('click', c.deleteButton);
//c.find().bind();
//c.find().bind();
}


cart.prototype = new component(); 