const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/users', (req, res) => {
  MongoClient.connect('mongodb://User:Password@aws-eu-west-1-portal.0.dblayer.com:16074,aws-eu-west-1-portal.1.dblayer.com:16074/favbusstop?ssl=true', function (err, db) {
  if (err) throw err

  db.collection('busstop').find().toArray(function (err, result) {
    if (err) throw err
    res.json(result);
  })
});
})


module.exports = router;
