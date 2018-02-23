var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

//middleware goes here
//
//
//parse the request, make sure we can convert incoming data into
//something Express can use
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

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

router.delete('/:id', (req, res) => {
  console.log(`hit to delete route ${req.params.id}`);

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
});

router.post('/', (req, res) => {
  console.log(`hit to post route`);
  myQuery = `INSERT into mainmodel (model, modelName, pricing, modelDetails, imgPath) VALUE ("${req.body.model}", "${req.body.modelName}", "${req.body.pricing}", "${req.body.modelDetails}", "${req.body.imgPath}");`;
  console.log(myQuery);
  connect.query(myQuery, (err, data) => {
    if(err) {
      throw err;
    }
    else {
      console.log(data)
      res.json(data);
    }
  });
});

module.exports = router;
