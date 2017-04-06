const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/users', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  MongoClient.connect('mongodb://api:3qBdwMFF8t2m2V5g@92.222.75.92/UKSF', function (err, db) {
  if (err) throw err

  db.collection('Users').find().toArray(function (err, result) {
    if (err) throw err
    res.json(result);
  })
});
})


module.exports = router;
