'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DiveSchema = new Schema(
	{
		name: {
			type: String,
			Required: 'Kindly enter the name of your dive spot'
		},
		Created_date: {
			type: Date,
			default: Date.now
		},
		status: {
		type: [{
			type: String,
			enum: ['planned', 'in_progress', 'completed']
		}],
		default: ['planned']
		}
	});

module.exports = mongoose.model('Dives', DiveSchema);
