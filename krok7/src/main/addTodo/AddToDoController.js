/**
 * Created by Marcin on 17.04.2016.
 */
function AddToDoController($state, ToDoService, $scope){
    var ac = this;

    ac.priorityList = [
        {
            id: 0,
            name: 'Low'
        },
        {
            id: 1,
            name: 'Medium'
        },
        {
            id: 2,
            name: 'High'
        }
    ];

    ac.todo = {
        text: '',
        description: '',
        priority: 0
    }

    ac.save = function(){
        ToDoService.addToDo(ac.todo).then(function(response){

            $scope.$emit('TODO_ADD_SUCCESS');

            $state.go('list');
        }, function(error){
            $scope.$emit('TODO_ERROR');
        });


    }

}