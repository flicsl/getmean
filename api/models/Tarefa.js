var mongoose = require('mongoose');

var tarefaSchema = mongoose.Schema({
    conteudo: String,
    createdAt: Date,
    finishedAt: Date
});

module.exports = mongoose.model('Tarefa', tarefaSchema);