//Dependencies
var https = require('https');
var helpers = require('./helpers');



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
                        var body = ""
                        https.get(endpoint, (response) => {
                            response.on('data', (chunk) => { body += chunk })
                            response.on('end', () => {
                                var result = JSON.parse(body)
                                context.succeed(
                                    generateResponse(
                                        buildSpeechletResponse(`The latest bus is ${result.results[0].route} and the due time is ${result.results[0].duetime} minutes`, true),
                                        buildSpeechletResponse(`The next bus after it is the ${result.results[1].route} and the due time for it is ${result.results[1].duetime} minutes`, true),
                                        {}
                                    )
                                );
                            });
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