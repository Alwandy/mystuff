var fs = require('fs');
var path = require('path');

var applyAPIDirectory = function(app){
	fs.readdir("api/", function(err,list){
		if (err) {
			throw err;
		}
		else if (list == null){
			return;
		}
		
		for(var i=0; i<list.length; i++)
		{
			console.log(list[i]); 
			var file = require("../api/" + list[i].replace(".js", ""));
			file.applyAPI(app);
		}
	});
}

module.exports = applyAPIDirectory;