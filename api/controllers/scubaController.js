'use strict';

var mongoose = require('mongoose'),
	Dive = mongoose.model('Dives');

exports.list_all_dives = function(req, res) {
	Dive.find({}, function(err, dive) {
		if (err)
			return res.send(err);
		return res.json(dive);
	});
};

exports.create_a_dive = function(req, res) {
	var new_dive = new Dive(req.body);
	new_dive.save(function(err, dive) {
		if (err)
			return res.send(err);
		return res.json(dive);
	});
};

exports.read_a_dive = function(req, res) {
	Dive.findById(req.params.diveId, function(err, dive) {
		if(err)
			return res.send(err);
		return res.json(dive);
	});
};

exports.update_a_dive = function(req, res) {
	Dive.findOneAndUpdate(req.params.diveId, req.body, {new: true}, function(err, dive) {
		if(err)
			return res.send(err);
		return res.json(dive);
	});
};

exports.delete_a_dive = function(req, res) {
	Dive.remove({
		_id: req.params.diveId
		}, function(err, dive) {
		if(err)
			return res.send(err);
		return res.json({ message: 'Dive successfully deleted' });
	});
};
