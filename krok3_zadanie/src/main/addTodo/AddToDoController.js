/**
 * Created by Marcin on 17.04.2016.
 */
function AddToDoController($state){
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
        /*call rest servioe here*/
        $state.go('list');
    }

}