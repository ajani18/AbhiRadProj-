var express = require('express');
var router = express.Router();
// var Data = require('./dataModels/data'); //bring in schema (how data is orgnaized in database)

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [];
  Data.find()
  .exec(function (err, docs) {
    if(err) return console.error(err);
    else {
        data = docs;
        res.json(docs); //
    }
  });

});

module.exports = router; //routes resoiblie from model to views
