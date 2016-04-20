function broadcastListener($rootScope, toastr) {
    $rootScope.$on('TODO_DOWNLOAD_SUCCESS', function (event, data) {
        var msg = 'Jupi! All todos downloaded!';
        toastr.success(msg);
        console.log(msg);
    });
    
    $rootScope.$on('TODO_ADD_SUCCESS', function (event, data) {
        var msg = 'Jupi! New ToDo added';
        toastr.success(msg);
        console.log(msg);
    });

    $rootScope.$on('TODO_DELETE_SUCCESS', function (event, data) {
        var msg = 'Jupi! ToDo deleted!';
        toastr.info(msg);
        console.log(msg);
    });

    $rootScope.$on('TODO_ERROR', function (event, data) {
        var msg = 'Ehh! Something went wrong :(';
        toastr.error(msg);
        console.log(msg);
    });
}