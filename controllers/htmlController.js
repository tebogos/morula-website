'use strict'
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

	app.get('/', function(req, res,next) {
		res.render('index');
  next()
	});

  app.get('/service', function(req, res,next) {
		// res.send('Thank you!');
    res.render('service');
  next()

	});

  app.get('/documents', function(req, res,next) {
		// res.send('Thank you!');
    res.render('documents');
  next();
	});
	app.get('/about', function(req, res,next) {
		// res.send('Thank you!');
		res.render('about');
	next();
	});
	app.get('/contacts', function(req, res,next) {
		// res.send('Thank you!');
		res.render('contacts');
	next();
	});
	app.get('/building', function(req, res,next) {
		// res.send('Thank you!');
    res.render('building');
  next()

	});
	app.get('/consulting', function(req, res,next) {
		// res.send('Thank you!');
    res.render('consulting');
  next()

	});
	app.get('/civil-construction', function(req, res,next) {
		// res.send('Thank you!');
    res.render('civil-construction');
  next();
	});
	app.get('/pee', function(req, res,next) {
		// res.send('Thank you!');
    res.render('pee');
  next();
	});
	app.get('/terms-of-use', function(req, res,next) {
		// res.send('Thank you!');
		res.render('terms-of-use');
	next();
	});
	app.get('/privacy-policy', function(req, res,next) {
		// res.send('Thank you!');
		res.render('privacy-policy');
	next();
	});



	app.get('/person/:id', function(req, res,next) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    next()
	});






}
