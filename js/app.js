angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])
.constant('serverRoute', 'http://localhost:3000')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: '../templates/home.html'
  }).when('/login', {
    templateUrl: '../templates/login.html'
  });
}]);