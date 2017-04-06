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
			if(list[i].includes("Controller.js"))
				app.use("/api", require("../api/" + list[i].replace(".js", "")));
		}
	});
}

module.exports.applyAPIDirectory = applyAPIDirectory;