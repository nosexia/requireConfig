require([
	'require',
    'ui/ui3'
],function(require, ui3){
    console.log(ui3);    		//{name: nose} 
   	var ui3_copy = require('./ui/ui3');
   	console.log(ui3_copy === ui3);  
});
