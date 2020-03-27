var app = angular.module('miniProj1App', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/whoami.html',
            activetab: 'whoami',
            title: 'Quem sou eu?'
        })

        .when('/work', {
            templateUrl: 'pages/work.html',
            activetab: 'work',
            title: 'O que faço?'
        })

        .when('/hobbies', {
            templateUrl: 'pages/hobbies.html',
            activetab: 'hobbies',
            title: 'Hobbies'
        })

        .otherwise({ redirectTo: '/' });
});

// Update page title and current active tab
app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.activetab = current.$$route.activetab;
    });
}]);
