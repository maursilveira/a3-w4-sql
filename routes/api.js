var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET users listing. */
router.get('/api/:id', (req, res) => {
  console.log(req.params.id);
  connect.query(`SELECT * FROM mainmodel WHERE model = "${req.params.id}"`, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      //return result as json
      res.json({
        carData: result
      });
    }
  });
});

router.delete('api/:id', (req, res) => {
  console.log('hit to delete route');

  connect.query(`DELETE FROM mainmodel WHERE model = "${req.params.id}"`, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      //return result as json
      res.json(result);
    }
  });
})

module.exports = router;
