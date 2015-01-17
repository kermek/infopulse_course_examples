function mywindow(sSelector)
{
var w = this;
//1. Data
w.init(sSelector);
w.startCountdownBtn 	= w.find('.b-mywindow__start-countdown');
w.stopCountdownBtn	 	= w.find('.b-mywindow__stop-countdown');
w.startTickerBtn 		= w.find('.b-mywindow__start-ticker');
w.stopTickerBtn			= w.find('.b-mywindow__stop-ticker');
w.openWindowBtn 		= w.find('.b-mywindow__open-window');
w.closeWindowBtn 		= w.find('.b-mywindow__close-window');
w.ticker				= null; //planned for object
w.countdown				= null;
w.tickerTime			= 0;	//in seconds
w.tickerPeriod			= 2;
w.newWindow				= null;
//2. Logic
w.countdownNotification = function(){
	alert('Время истекло.');	
	}
w.tickerNotification 	= function(){
	w.tickerTime += w.tickerPeriod;
	console.log('Прошло ' + w.tickerTime + ' секунд');
	}
w.startCountdown 		= function(){
	var mayIstart = window.confirm('Можно приступать?');
	if (mayIstart){
		w.countdown = window.setTimeout(w.countdownNotification, 7000); //milliseconds
		}
	else {
		alert('Ну, не хотите, как хотите.');	
		}
	}
w.stopCountdown 		= function(){
	window.clearTimeout(w.countdown);
	alert('Таймер остановлен.');	
	}
w.startTicker 			= function(){
	w.ticker = window.setInterval(w.tickerNotification, w.tickerPeriod * 1000);
	}
w.stopTicker 			= function(){
	window.clearInterval(w.ticker);
	console.log('Таймер остановлен.');
	}
w.openWindow 			= function(){
	w.newWindow = window.open(
		 'new_window.html'
		,'_blank'
		,'width=300, height=300'
		);
	}
w.closeWindow 			= function(){
	w.newWindow.close();
	}
//3. Events
w.startCountdownBtn 	.bind('click', w.startCountdown);
w.stopCountdownBtn	 	.bind('click', w.stopCountdown);
w.startTickerBtn 		.bind('click', w.startTicker);
w.stopTickerBtn			.bind('click', w.stopTicker);
w.openWindowBtn 		.bind('click', w.openWindow);
w.closeWindowBtn 		.bind('click', w.closeWindow);
}

mywindow.prototype = new component();