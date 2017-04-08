// BASE SETUP
// =============================================================================


// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var apiProcessor = require("./core/apiprocessor");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
apiProcessor.applyAPIDirectory(app, "/api", "api/");

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || 4070;
app.set('port', port);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('');
console.log('Server ready and listening on port ' + port);