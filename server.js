var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/assets/index.css', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/assets/index.css'));
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

var filePath = path.join(__dirname, 'tarefas.json');
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