var mongoose = require('mongoose');

var tarefaSchema = mongoose.Schema({
    conteudo: String,
    createdAt: Date,
    finishedAt: Date,
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);