var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'tarefas.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
    if (!err) {
	    console.log('Tarefas a fazer: \n' + data);
    } else {
    	console.log('Ocorreu um erro ao ler o arquivo!')
        console.log(err);
    }
});