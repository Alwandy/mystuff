//Dependencies
var https = require('https');
var helpers = require('./helpers');
var MongoClient = require('mongodb').MongoClient;

/***
* Functionality to print out latest bus and next bus after at given bus stop
* @return latest bus and next bus if available.
***/

exports.handler = (event, context) => {
    try {
        switch (event.request.type) {
            case "LaunchRequest":
                // Launch Request
                console.log(`LAUNCH REQUEST`)
                context.succeed(
                    generateResponse(
                        buildSpeechletResponse("Dublin Bus App, if you have any queries for latest departure on stop. Just say the stop number", true),
                        {}
                    )
                )
                break;

            case "IntentRequest":
                // Intent Request
                console.log(`INTENT REQUEST`)

                switch (event.request.intent.name) {

                    case "BusStopLatest":
                        var endpoint = `https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${event.request.intent.slots.StopNumber.value}&maxresults&operators=dublinbus&format=json`;
                        var body = "";
                        https.get(endpoint, (response) => {
                            response.on('data', (chunk) => { body += chunk })
                            response.on('end', () => {
                                var result = JSON.parse(body)
                                    context.succeed(
                                        generateResponse(
                                            buildSpeechletResponse(`The next bus is ${result.results[0].route} and the due time is ${result.results[0].duetime} minutes`, true),
                                            {}
                                        )
                                    );
                            });
                        });
                        break;

                        /** Save bus stop to MongoDB**/
                    case "BusStopSave":
                        MongoClient.connect("mongodb://User:Password@aws-eu-west-1-portal.0.dblayer.com:16074/favbusstop?ssl=true", function (err, db) {
                            if (!err) {
                                var collection = db.collection('busstop');
                                collection.remove({ uniqueid: event.session.user.userId });
                                var AlexaQuery = { 'busstop': event.request.intent.slots.StopNumber.value, 'uniqueid': event.session.user.userId };
                                collection.insert(AlexaQuery);
                                context.succeed(
                                    generateResponse(
                                        buildSpeechletResponse(`It is now stored.`, true),
                                        {}
                                    )
                                );
                            }
                        });

                        break;

                    case "BusStopFavorite":
                        MongoClient.connect("mongodb://User:Password@aws-eu-west-1-portal.0.dblayer.com:16074/favbusstop?ssl=true", function (err, db) {
                            if (!err) {
                                var collection = db.collection('busstop');
                                collection.findOne({ 'uniqueid': event.session.user.userId }, function (err, result) {
                                    var endpoint = `https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${result.busstop}&maxresults&operators=dublinbus&format=json`;
                                    var body = "";
                                    https.get(endpoint, (response) => {
                                        response.on('data', (chunk) => { body += chunk })
                                        response.on('end', () => {
                                            var result = JSON.parse(body)
                                            context.succeed(
                                                generateResponse(
                                                    buildSpeechletResponse(`The next bus is ${result.results[0].route} and the due time is ${result.results[0].duetime} minutes`, true),
                                                    {}
                                                )
                                            );
                                         });
                                    });
                                });
                        }
                      });
                        break;

                    default:
                        throw "Invalid bus stop"
                }

                break;

            case "SessionEndedRequest":
                // Session Ended Request
                console.log(`SESSION ENDED REQUEST`)
                break;

            default:
                context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

        }

    } catch (error) { context.fail(`Exception: ${error}`) }

}
