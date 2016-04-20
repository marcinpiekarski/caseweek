function ToDoController($state, ToDoService, $scope){
    var td = this;
    td.todoList = [];
    td.addToDo = addToDo;
    td.deleteToDo = deleteToDo;

    init();


    /*  Functions   */

    function init(){
        ToDoService.getTodos().then(function (response) {
            td.todoList = response.data;
            $scope.$emit('TODO_DOWNLOAD_SUCCESS');
        }, function (error) {
            $scope.$emit('TODO_ERROR');
        })
    }

    function addToDo(){
        $state.go('add');
    }

    function deleteToDo(id){
        ToDoService.deleteToDo(id).then(function (response) {
            $scope.$emit('TODO_DELETE_SUCCESS');
            td.todoList = response.data;
        }, function (error) {
            $scope.$emit('TODO_ERROR');
        })
    }

}