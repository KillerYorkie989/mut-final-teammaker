angular.module('players').controller('PlayersController', ['$scope', '$routeParams', '$location', 'Players', '$timeout', function($scope, $routeParams, $location, Players, $timeout){

    
    $scope.create = function() {

      var player = new Players({
            name: this.name,
            overallRating: this.overallRating,
            position: this.position,
            speed: this.speed,
            awareness: this.awareness,
            strength: this.strength,
            agility: this.agility,

      });
      player.$save(function(response) {
          $location.path('/api/players/:' + response._id);
      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });
    };
    
    $scope.find = function() {
      $scope.players = Players.query();
      console.log($scope.players);
    };
    
    $scope.findOne = function() {
        $scope.player = Players.get({
            playerId: $routeParams.playerId
        });
    };
    
    $scope.update = function() {
        $scope.player.$update(function() {
            console.log($scope);
            $location.path('/api/players/' + $scope.player._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.delete = function(player) {
        if (player) {
            player.$remove(function() {
                for (var i in $scope.players) {
                    if ($scope.players[i] === player) {
                        $scope.players.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.player.$remove(function() {
                $location.path('players');
            });
        }
    };
    
    
}]);