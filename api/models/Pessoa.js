var mongoose = require('mongoose');

var pessoaSchema = mongoose.Schema({
    nome: String,
    nascimento: Date
});

module.exports = mongoose.model('Pessoa', pessoaSchema);