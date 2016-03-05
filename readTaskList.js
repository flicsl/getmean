var fs = require('fs');
var path = require('path');
var http = require("http");

var filePath = path.join(__dirname, 'tarefas.json');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
    if (!err) {
    	var tarefas = JSON.parse(data);
    	console.log('Tarefas a fazer:');
    	for (var i = 0; i < tarefas.length; i++) {
    		 console.log(tarefas[i]);
    	}
	    
    } else {
    	console.log('Ocorreu um erro ao ler o arquivo!')
        console.log(err);
    }
});