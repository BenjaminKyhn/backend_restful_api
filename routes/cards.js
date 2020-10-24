var express = require('express');
var router = express.Router();
var cards = require('../model/cards')

/* GET cards */
router.get('/', function(req, res, next) {
    console.log("GET request received.")
    res.send(JSON.stringify(cards));
});

router.get('/random', function(req, res, next) {
    let randomCard = Math.floor(Math.random()*cards.length);
    res.send(JSON.stringify(cards[randomCard]));
});

router.put('/', function(req, res, next) {
    obj = {}
    obj.svar = "PUT request modtaget, data er opdateret.";
    res.send(JSON.stringify(obj));
});
module.exports = router;
