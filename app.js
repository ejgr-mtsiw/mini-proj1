var app = angular.module('miniProj1App', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/whoami.html',
            controller: 'WhoAmIController',
            activetab: 'home'
        })

        .when('/work', {
            templateUrl: 'pages/work.html',
            controller: 'WorkController',
            activetab: 'work'
        })

        .when('/hobbies', {
            templateUrl: 'pages/hobbies.html',
            controller: 'HobbiesController',
            activetab: 'hobbies'
        })

        .otherwise({ redirectTo: '/' });
});

app.controller('WhoAmIController', function ($scope) {
    $scope.message = 'Hello from WhoAmIController';
});

app.controller('WorkController', function ($scope) {
    $scope.message = 'Hello from WorkController';
});

app.controller('HobbiesController', function ($scope) {
    $scope.message = 'Hello from HobbiesController';
});