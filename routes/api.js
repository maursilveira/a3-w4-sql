var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

router.use((req, res, next) => {
  var now = new Date();
  var timestamp = now.toLocaleString('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  console.log(`you made a ${req.method} call`);
  console.log(`you made the call at ${timestamp}`);
  // console.log(req.headers['user-agent']);
  next(); //run the next method (get, put, post, etc)
});

/* GET users listing. */
// router.get('/api/:id', (req, res) => {
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  // console.log('api route with parameters fired');
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

// router.delete('api/:id', (req, res) => {
//   console.log('hit to delete route');
//
//   connect.query(`DELETE FROM mainmodel WHERE model = "${req.params.id}"`, (err, result) => {
//     if(err) {
//       throw err;
//       console.log(err);
//     }
//     else {
//       console.log(result);
//       //return result as json
//       res.json(result);
//     }
//   });
// });

module.exports = router;
