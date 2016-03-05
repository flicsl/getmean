var mongoose = require('mongoose');

var tarefaSchema = mongoose.Schema({
    conteudo: {
    	type: String, 
		validate: {
		    validator: function(v) {
		      return v !== null && v !== '';
		    },
		    message: 'Não é possível criar uma tarefa com o conteudo vazio!'
	    }
	},
    createdAt: {
    	type: Date,
    	validate: {
		    validator: function(v) {
		      return v !== null;
		    },
		    message: 'Não é possível criar uma tarefa sem data de criação!'
	    }
	},
    finishedAt: Date,
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);