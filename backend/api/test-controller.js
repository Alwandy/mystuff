module.exports =  function(controllerName, router){
	router.get(controllerName, (req, res) => {
		res.send("test works");
	});
	return router;
};