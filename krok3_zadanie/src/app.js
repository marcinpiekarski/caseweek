/**
 * Created by Marcin on 17.04.2016.
 */

var todoApp = angular.module('todoApp', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

todoApp.controller('ToDoController', ToDoController);
todoApp.controller('AddToDoController', AddToDoController);
todoApp.config(routerConfig);