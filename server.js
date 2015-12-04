var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos =[{
	id: 1,
	description: 'Meet mum for lunch.',
	completed: false
}, {
	id: 2,
	description: 'Go to market.',
	completed: false
}, {
	id: 3,
	description: 'Call friend about staying.',
	completed: true
}]


app.get('/', function (req,res){
	res.send('Todo API Root');
});

app.get('/todos', function (req,res) {
	res.json(todos);
});

app.get('/todos/:id', function (req,res) {
	var todoId = parseInt(req.params.id,10);

	if(todoId > todos.length) {
		res.status(404).send();
	} else {
		for (var i = 0; i < todos.length; i++){
			if(todoId === todos[i].id) {
				res.json(todos[i]);
			}
		}
	}
	
	//res.send('Asking for todo with id of ' + req.params.id);
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});