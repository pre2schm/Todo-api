var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos =[]
var todoNextId = 1;

app.use(bodyParser.json())

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
		console.log(todos);

	} else {
		for (var i = 0; i < todos.length; i++){
			if(todoId === todos[i].id) {
				res.json(todos[i]);
			}
		}
	}
	
	//res.send('Asking for todo with id of ' + req.params.id);
});

app.post('/todos', function (req,res){
	
	var body = req.body;
	body.id = todoNextId++;
	// var object = {
	// 	id : todoNextId,
	// 	description : body.description,
	// 	completed : body.completed,
	// };

	// todoNextId++;
	todos.push(body);
	//console.log(todos);
	
	//console.log('description: ' + body.description);
	//console.log(todos.length);
	res.status(200).send();
	//res.json(body);
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});