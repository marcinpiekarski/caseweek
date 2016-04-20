/**
 * Created by Marcin on 17.04.2016.
 */
function routerConfig($stateProvider, $urlRouterProvider) {
//
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/list");
    //
    // Now set up the states
    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl: "main/toDoTemplate.html",
            controller: 'ToDoController',
            controllerAs: 'td'
        });
}