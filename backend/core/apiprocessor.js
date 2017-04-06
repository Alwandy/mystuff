var fs = require('fs');
var path = require('path');
var express  = require('express'); 
const router = express.Router();
const controllerSuffix = "Controller.js";

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
			if(list[i].includes(controllerSuffix)){
				var requireName = "../api/" + list[i].replace(".js", "");
				var apiName = "/"+list[i].replace(controllerSuffix, "");
				require(requireName)(apiName, router);
			}
			
			app.use("/api", router);
		}
	});
}
module.exports.applyAPIDirectory = applyAPIDirectory;