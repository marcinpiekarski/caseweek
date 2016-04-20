function ToDoDetailsController($uibModalInstance, $filter, todo) {
    var details = this;

    details.todo = todo;

    details.todo.creationDate = $filter('date')(new Date(details.todo.creationDate), 'dd-MM-yyyy');
    details.close = close;

    /* Functions */

    function close() {
        $uibModalInstance.close();
    }
}