angular.module('players').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/players/create', {
        templateUrl: '/public/views/newPlayer.html',
    }).when('/', {
        templateUrl: '/public/views/display-players.html'
    }).when('/players/:playerId', {
        templateUrl: '/public/views/viewPlayer.html'
    }).when('/players/:playerId/edit', {
        templateUrl: '/public/views/editPlayer.html'
    });
    //.when('/', {
     //templateUrl: '/public/views/index.html'
    // });
    }
]);