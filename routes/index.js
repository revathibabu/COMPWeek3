var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.post('/contact', function(req, res, next) {
  console.log('Got body:', req.body);
  var storedvalue = req.body
  res.render('index', { title: 'Home',storedvalue: "storedvalue"});
  //res.sendStatus(200);
});

module.exports = router;
