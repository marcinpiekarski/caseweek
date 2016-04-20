function ToDoController($state){
    var td = this;

    td.todoList = [
        {
            text: 'First ToDO',
            description: 'First ToDO description',
            creationDate: new Date(),
            priority: 0
        },
        {
            text: 'Second ToDO',
            description: 'Second ToDO description',
            creationDate: new Date(),
            priority: 0
        },
        {
            text: 'Third ToDO',
            description: 'Third ToDO description',
            creationDate: new Date(),
            priority: 0
        }
    ];

    td.addToDo = function(){
        $state.go('add');
    }

}