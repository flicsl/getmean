var mongoose = require('mongoose');

module.exports = {
	'getTarefas': function (req, res) {
					mongoose.models.Tarefa.find(function (err, data) {
						if (!err) {
							res.send(data);
						} else {
							res.send(err);
						}
					})
				}
}