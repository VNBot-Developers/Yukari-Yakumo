
var fs = require('fs');
var colors = require('colors');

module.exports = {
	//log function
	log: function(data, option) {
		if(option == 0)
			return console.log('[ ✓ ]::'.green+data.white);
		if(option == 1)
			return console.log('[ ! ]::'.red+data.white);
		if(option == -1)
			return console.log('[ ⚠ ]::'.yellow+data.white);
		if(option == 2)
			return console.log('[ ☠ ]::'.blue+data.white);
		if(option == null || option == undefined)
			return console.log(('[ UwU ] '.magenta+data).white);
	},
};  