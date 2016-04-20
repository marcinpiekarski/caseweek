function ToDoService($http){

    var _getTodos = function(){
        return $http.get('http://localhost:8080/api/todos');
    };

    return {
        getTodos: _getTodos
    }
}