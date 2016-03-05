var mongoose = require('mongoose');

module.exports = {
	'getPessoas': function (req, res) {
					mongoose.models.Pessoa.find(function (err, data) {
						if (!err) {
							res.send(data);
						} else {
							res.send(err);
						}
					})
				}
}