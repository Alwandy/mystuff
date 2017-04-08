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

var port = process.env.PORT || 4070;        // set our port

<<<<<<< HEAD
// ROUTES FOR OUR API
// =============================================================================
apiProcessor.applyAPIDirectory(app, "/api", "api/");

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('');
console.log('Server ready and listening on port ' + port);
=======
// Set our api routes
app.use('/api', api);
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
>>>>>>> 4b281006dc73d06dba09695f1bbdb1110d308f46
