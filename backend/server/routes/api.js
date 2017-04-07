const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('UKSF API REQUEST PAGE');
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

router.get('/user/:authid/:name', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
MongoClient.connect('mongodb://api:3qBdwMFF8t2m2V5g@92.222.75.92/UKSF', function (err, db) {

    if (err) throw err
    db.collection('Users').findOne({ authid: req.params.authid },function (err, result){
        if(result == null || result == 'undefined'){
            db.collection('Users').insert({
                fullname:req.params.name,
                authid:req.params.authid,
                rank:"N/A",
                platoon:0,
                section:"N/A",
                usergroup:0
            })
        } else {
          res.json(result);
        }
    });
});
})



module.exports = router;
