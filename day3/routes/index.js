var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 const travelPlaces = [
    { name: "Paris", country: "France", isPopular: true },
    { name: "Kyoto", country: "Japan", isPopular: false },
    { name: "Bali", country: "Indonesia", isPopular: true }
  ];
res.render("index", { 
    welcomeMsg: "Welcome to World Explorer!",
    places: travelPlaces
  });
});

module.exports = router;
