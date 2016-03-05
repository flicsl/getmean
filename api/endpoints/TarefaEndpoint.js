var mongoose = require('mongoose');

module.exports = {
	'getTarefas': function (req, res) {
					mongoose.models.Tarefa.find()
					.populate('responsavel')
					.exec(function (err, data) {
						if (!err) {
							res.send(data);
						} else {
							res.send(err);
						}
					})
				}
}