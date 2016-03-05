var fs = require('fs');
var path = require('path');
var http = require('http');

var filePath = path.join(__dirname, 'tarefas.json');

var server = http.createServer(function (request, response) {
	getTarefas(function (err, tarefas) {
		if (!err) {
			response.writeHead(200, { "Content": "application/json" });
			response.write(JSON.stringify(tarefas));
		}
		else {
			response.writeHead(500);
		}
		response.end();
	});
});

server.listen(3000, function () {
	console.log("Servidor ouvindo na porta 3000.");
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