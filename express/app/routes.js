var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
}
;

module.exports = function (app) {
    // get all todos
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

    // create todo
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
			description: req.body.description,
			priority: req.body.priority,
			creationDate: new Date().toString(),
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
			
			res.json(todo);
        });

		
		
    });

    // delete a todo and send back all todos after deletion
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });
};