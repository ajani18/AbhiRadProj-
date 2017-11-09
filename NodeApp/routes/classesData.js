var express = require('express');
var router = express.Router();
var Data = require('.././dataModels/data'); //bring in schema (how data is orgnaized in database)


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


router.get('/mrjones', function (req, res, next) {
    MongoClient.connect('mongodb://abhijani123:Beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
            if (err) { return console.dir(err); }
            var collection = db.collection('MrJones');
            collection.find().sort({ date: -1 }).toArray(function (err, dataJones) {
                res.json(dataJones); //
            });
        });
}); //allows classesdata 

router.get('/makerspace', function (req, res, next) {
     MongoClient.connect('mongodb://abhijani123:Beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
            if (err) { return console.dir(err); }
            var collection = db.collection('MakerSpace');
            collection.find().sort({ date: -1 }).toArray(function (err, dataMakerSpace) { 
                res.json(dataMakerSpace); 
            });
        });
});
/* GET home page. */
// router.get('/:class', function (req, res, next) {
//     var chooseRoom = req.params.class;
//     console.log(chooseRoom);
//     if (chooseRoom == "mrjones") {
//         MongoClient.connect('mongodb://abhijani123:Beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
//             if (err) { return console.dir(err); }
//             var collection = db.collection('MrJones');
//             collection.find().sort({ date: -1 }).toArray(function (err, dataJones) {
//                 res.json(dataJones); //
//             });
//         });
//     }
//     else if (chooseRoom == "makerspace") {
//         console.log("makerrr");
//         MongoClient.connect('mongodb://abhijani123:Beastmode17@cluster0-shard-00-00-8t9ca.mongodb.net:27017,cluster0-shard-00-01-8t9ca.mongodb.net:27017,cluster0-shard-00-02-8t9ca.mongodb.net:27017/RAD?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
//             if (err) { return console.dir(err); }
//             var collection = db.collection('MakerSpace1');
//             collection.find().sort({ date: -1 }).toArray(function (err, dataMakerSpace) {
//                 res.json(dataMakerSpace); //
//             });
//         });
//     }
// });




module.exports = router; //routes resoiblie from model to views