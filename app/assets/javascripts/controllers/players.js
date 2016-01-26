// ------------------------------------- PLAYERS CONTROLLER ------------------------------------- //
app.controller("playersController", ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){
	playerFactory.index(function(json){
		$scope.players = json;
	})

	teamFactory.index(function(json){
		$scope.teams = json;
	})
	$scope.createPlayer = function(){
		console.log($scope.newPlayer)
		playerFactory.create($scope.newPlayer, function(json){
			$scope.players = json;
			$scope.newPlayer = {};

		});
	}
	$scope.deletePlayer = function(playerId){
		playerFactory.delete(playerId, function(json){
			$scope.players = json;
		})
	}
}])

app.controller("playerShowController", ['$scope', '$stateParams', 'playerFactory', function($scope, $stateParams, playerFactory){
	playerFactory.show($stateParams.id, function(json){
		$scope.playerInfo = json;
	})
}]);