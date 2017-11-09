var express = require('express');
var router = express.Router();
var Data = require('.././dataModels/data'); //bring in schema (how data is orgnaized in database)


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

/* GET home page. */
router.get('/:class', function (req, res, next) {
    var chooseRoom = req.params.class;
    if (chooseRoom == "mrjones") {
        res.render('index', {
            title: "Makerspace"
        })
    }   else if (chooseRoom == "makerspace") {
        console.log("makerrr");
        

    }
});




module.exports = router; //routes resoiblie from model to views