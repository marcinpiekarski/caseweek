function ToDoListDirectiveController($uibModal) {
    var tdd = this;

    tdd.addToDo = addToDo;
    tdd.deleteToDo = deleteToDo;
    tdd.showDetails = showDetails;

    /* Functions */

    function addToDo(){
        tdd.onAdd();
    }

    function deleteToDo(id) {
        tdd.onDelete({todoId: id});
    }
    
    function showDetails(selectedTodo) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'main/toDoDetails/toDoDetailsTemplate.html',
            controller: 'ToDoDetailsController',
            controllerAs: 'details',
            size: 'md',
            resolve: {
                todo: function () {
                    return selectedTodo;
                }
            }
        });
    }
    
}