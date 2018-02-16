var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET users listing. */
router.get('/cars', (req, res) => {
  connect.query('SELECT * FROM mainmodel', (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      res.render('cars', {
        title: 'Cooper Models',
        message: 'A Selection of Minis',
        carData: result
      });
    }
  });
});

module.exports = router;
