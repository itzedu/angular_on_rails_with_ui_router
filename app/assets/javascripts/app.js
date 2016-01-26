var app = angular.module('nbaApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('players', {
			url: "/players",
			templateUrl: "/partials/players/index.html",
			controller: "playersController"
		})
		.state('teams', {
			url: "/teams",
			templateUrl: "partials/teams/index.html",
			controller: "teamsController"
		})
		.state('players.show', {
			url: "/:id",
			templateUrl: 'partials/players/show.html',
			controller: "playerShowController"
		})
		.state('teams.show', {
			url: "/:id",
			templateUrl: 'partials/teams/show.html',
			controller: "teamShowController"
		})
}])

// ------------------------------------- FACTORIES ------------------------------------- //
app.factory("playerFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/players").success(function(output){
			callback(output);
		})
	}
	factory.create = function(playerInfo, callback){
		$http.post("/players", playerInfo).success(function(output){
			callback(output);
		})
	}
	factory.show = function(id, callback){
		$http.get('/players/' + id).success(function(output){
			callback(output);
		})
	}
	factory.delete = function(id, callback){
		$http.delete("/players/" + id).success(function(output){
			callback(output);
		})
	}
	return factory;
})

app.factory("teamFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/teams").success(function(output){
			callback(output);
		})
	}
	factory.show = function(id, callback){
		$http.get('/teams/' + id).success(function(output){
			callback(output);
		})
	}	
	factory.create = function(teamInfo, callback){
		$http.post("/teams", teamInfo).success(function(output){
			callback(output);
		})
	}
	factory.delete = function(id, callback){
		$http.delete("/teams/" + id).success(function(output){
			callback(output);
		})
	}
	return factory;
})

// ------------------------------------- CONTROLLERS ------------------------------------- //
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
 
app.controller("teamsController", ['$scope', 'teamFactory', function($scope, teamFactory){
	teamFactory.index(function(json){
		$scope.teams = json;
	})
	$scope.createTeam = function(){
		teamFactory.create($scope.newTeam, function(json){
			$scope.teams = json;
			$scope.newTeam = {};
		})
	}
	$scope.deleteTeam = function(teamId){
		teamFactory.delete(teamId, function(json){
			$scope.teams = json;
		})
	}
}])

app.controller("teamShowController", ['$scope', '$stateParams', 'teamFactory', function($scope, $stateParams, teamFactory){
	teamFactory.show($stateParams.id, function(json){
		$scope.teamInfo = json;
	})
}]);