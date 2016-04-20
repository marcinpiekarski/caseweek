function ToDoController($state, ToDoService){
    var td = this;
    td.todoList = [];
    td.addToDo = addToDo;
    td.deleteToDo = deleteToDo;

    init();


    /*  Functions   */

    function init(){
        ToDoService.getTodos().then(function (response) {
            td.todoList = response.data;
            console.log('Jupi! All todos downloaded!', response);
        }, function (error) {
            console.log('Ehh! Something went wrong :(', error);
        })
    }

    function addToDo(){
        $state.go('add');
    }

    function deleteToDo(id){
        ToDoService.deleteToDo(id).then(function (response) {
            console.log('Jupi! ToDo deleted!', response);
            td.todoList = response.data;
        }, function (error) {
            console.log('Ehh! Something went wrong :(', error);
        })
    }

}