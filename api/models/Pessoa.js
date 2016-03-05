var mongoose = require('mongoose');

var pessoaSchema = mongoose.Schema({
    nome: String,
    nascimento: Date,
    tarefas: {
        _id : { type: mongoose.Schema.Types.ObjectId, ref: 'Tarefa' },
        conteudo : {type: String, ref: 'Tarefa'}
    },
});

module.exports = mongoose.model('Pessoa', pessoaSchema);