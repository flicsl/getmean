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
				},
	'postTarefas': function (req, res) {
					var tarefa = new mongoose.models.Tarefa({ 
						conteudo: req.body.conteudo, 
						createdAt: req.body.createdAt, 
						finishedAt: req.body.finishedAt
					});
					tarefa.save(function (err, created) {
						if (!err) {
							res.send(created);
						} else {
							res.send(err);
						}
					});
				}
}