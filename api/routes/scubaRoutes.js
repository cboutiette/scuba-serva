'use strict';
module.exports = function(app) {
	var scubaserva = require('../controllers/scubaController');


	app.route('/dives')
		.get(scubaserva.list_all_dives)
		.post(scubaserva.create_a_dive);

	app.route('/dives/:diveId')
		.get(scubaserva.read_a_dive)
		.put(scubaserva.update_a_dive)
		.delete(scubaserva.delete_a_dive);
	};
