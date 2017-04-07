var MongoClient = require('mongodb').MongoClient;

module.exports =  function(controllerName, router){
	// Get all posts
	router.get(controllerName, (req, res) => {
	  res.header('Access-Control-Allow-Origin', '*');
	  MongoClient.connect('mongodb://api:3qBdwMFF8t2m2V5g@92.222.75.92/UKSF', function (err, db) {
	  if (err) throw err

	  db.collection('Users').find().toArray(function (err, result) {
		if (err) throw err
		res.json(result);
	  })
	});
	})
	return router;
};