var express = require('express');
var router = express.Router();
var config = require('../config');

//check default profile user
var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, {
    kidsmode: config.kidsmode,
    title: 'Roku | Main Page',
    message: 'This is Roku',
    mainpage: true
  });
});

module.exports = router;
