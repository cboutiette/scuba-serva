var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Dive = require('./api/models/scubaModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/scuba-db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/scubaRoutes');
routes(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});	

app.listen(port);

console.log('scuba-serva RESTful API server started on: ' + port);
