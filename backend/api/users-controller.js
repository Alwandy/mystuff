var MongoClient = require('mongodb').MongoClient;
var DB = require('../config.js');

module.exports =  function(controllerName, router){
	// Get all posts
	router.get(controllerName, (req, res) => {
	  res.header('Access-Control-Allow-Origin', '*');
	  MongoClient.connect(DB.dbConfig, function (err, db) {
	  if (err) throw err

	  db.collection('Users').find().toArray(function (err, result) {
		if (err) throw err
		res.json(result);
	  })
	});
	})
	return router;
};