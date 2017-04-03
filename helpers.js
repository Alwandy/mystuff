// Helpers
var https = require('https');
var MongoClient = require('mongodb').MongoClient;

buildSpeechletResponse = function (outputText, shouldEndSession) {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = function (speechletResponse, sessionAttributes) {

    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}
