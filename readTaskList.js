var fs = require('fs');
var path = require('path');
var express = require('express');

var filePath = path.join(__dirname, 'tarefas.json');

var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/tasks', function (req, res) {
	getTarefas(function (err, data) {
		if (!err) {
			res.send(data);
		} else {
			res.send(err);
		}
	})
})

app.listen(3000, function () {
	console.log("Servidor express ouvindo na porta 3000.");
});

function getTarefas (callback) {
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
	    if (!err) {
	    	var tarefas = JSON.parse(data);
	    	callback(err, tarefas);
	    } else {
	    	console.log('Ocorreu um erro ao ler o arquivo!')
	        console.log(err);
	        callback(err, null);
	    }
	});
}