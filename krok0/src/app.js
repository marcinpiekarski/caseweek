/**
 * Created by Marcin on 17.04.2016.
 */

var todoApp = angular.module('todoApp', []);

todoApp.controller('ToDoController', function(){
    var td = this;

    td.hellol = 'hellol';

    td.clickme = function(){
        alert('Button clicked!');
    }
})