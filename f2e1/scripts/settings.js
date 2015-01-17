var settings = {};
settings.data = {};

settings.init = function(oSettings){
	settings.data = oSettings;
	};
settings.get = function(sSettingName){
	return settings.data[sSettingName];
	};
settings.get2 = function(){
	var data = settings.data[arguments[0]]
	for (i = 1; i < arguments.length; i++){
		data = data[arguments[i]];
		}
	return data;
	};