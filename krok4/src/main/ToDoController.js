function ToDoController($state, ToDoService){
    var td = this;
    td.todoList = [];
    td.addToDo = addToDo;

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

}