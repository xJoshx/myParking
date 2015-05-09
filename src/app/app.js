
angular.module('myparking', [
  'ngRoute',
  'myparking.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/myparking/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
