function ToDoService($http){

    var _getTodos = function(){
        return $http.get('http://localhost:8080/api/todos');
    };

    var _addToDo = function(toDo){
        return $http.post('http://localhost:8080/api/todos', toDo);
    };

    var _deleteToDo = function(toDoId){
        return $http.delete('http://localhost:8080/api/todos/' + toDoId);
    };

    return {
        getTodos: _getTodos,
        addToDo: _addToDo,
        deleteToDo: _deleteToDo
    }
}