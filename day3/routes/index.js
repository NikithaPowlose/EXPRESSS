var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var  storeName="MY Book Store";
  var books=[
    {'title':'BBC','author':"MIKE"},
    {'title':'TALES','author':"MAX"},
    {'title':'CHANGE','author':"VECNA"}
  ]
  res.render("index", {storeName:storeName,books : books});
});

module.exports = router;
