var mongoose = require('mongoose');
var express = require('express');

// Conecta-se ao banco
mongoose.connect('mongodb://localhost/getmean');
mongoose.set('debug', true);
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Ocorreu um erro ao conectar-se ao banco.');
	console.log(err);
});

// Carrega Models e Endpoints
var Tarefa = require('./api/models/Tarefa.js');
var Pessoa = require('./api/models/Pessoa.js');
var TarefaEndpoint = require('./api/endpoints/TarefaEndpoint.js')
var PessoaEndpoint = require('./api/endpoints/PessoaEndpoint.js')

// Configura o servidor
var app = express();
app.use(express.static('public'));

app.get('/tarefas', TarefaEndpoint.getTarefas);
app.get('/pessoas', PessoaEndpoint.getPessoas);

// Inicia o servidor ao conectar-se ao banco
db.once('open', function() {
	app.listen(3000, function () {
		console.log("Servidor express ouvindo na porta 3000.");
	});
});