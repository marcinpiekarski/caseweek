function ToDoListDirective(){
    var directive = {
        restrict: 'E',
        scope: {
            todoList: '=',
            onDelete: '&',
            onAdd: '&'

        },

        controller: ToDoListDirectiveController,
        
        controllerAs: 'tdd',
        bindToController: true,
        templateUrl: 'main/toDoList/toDoListDirectiveTemplate.html',
    }
    
    return directive;
}