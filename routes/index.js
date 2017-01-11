var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/data', function(req,res){
	res.json([{"id": 1, "movieTitle": "Rogue One", "stars": "8.1 / 10"},
        {"id": 2, "movieTitle": "Passengers", "stars": "7.1 / 10"},
        {"id": 3, "movieTitle": "Assassin's Creed", "stars": "6.5 / 10"},
        {"id": 4, "movieTitle": "Sing", "stars": "7.3 / 10"},
        {"id": 5, "movieTitle": "Suicide Squad", "stars": "6.4 / 10"},
        {"id": 6, "movieTitle": "La La Land", "stars": "8.8 / 10"},
        {"id": 7, "movieTitle": "The Magnificent Seven", "stars": "7.0 / 10"},
        {"id": 8, "movieTitle": "Collateral Beauty", "stars": "6.5 / 10"},
        {"id": 9, "movieTitle": "Arrival", "stars": "8.3 / 10"},
        {"id": 10, "movieTitle": "Fantastic Beasts and Where to Find Them", "stars": "7.7 / 10"}]);
});
module.exports = router;
