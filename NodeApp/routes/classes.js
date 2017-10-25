var express = require('express');
var router = express.Router();
var Data = require('.././dataModels/data'); //bring in schema (how data is orgnaized in database)


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

/* GET home page. */
router.get('/', function (req, res, next) {
    MongoClient.connect('mongodb://abhijani123:beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) { return console.dir(err); }
        var collection = db.collection('MrJones');
        collection.find().toArray(function (err, dataJones) {
            res.json(dataJones); //
        });
    });
});

router.get('/:class', function (req, res, next) {
    var class = req.params.class;
    MongoClient.connect('mongodb://abhijani123:beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) { return console.dir(err); }
        var collection = db.collection('MrJones');
        collection.find().toArray(function (err, dataJones) {
            res.json(dataJones); //
        });
    });
});



module.exports = router; //routes resoiblie from model to views