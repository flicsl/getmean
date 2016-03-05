var mongoose = require('mongoose');

module.exports = {
	'getPessoas': function (req, res) {
					mongoose.models.Pessoa.find()
					.populate('tarefas._id', 'tarefas.conteudo')
					.exec(function (err, data) {
						if (!err) {
							res.send(data);
						} else {
							res.send(err);
						}
					});
				}
}