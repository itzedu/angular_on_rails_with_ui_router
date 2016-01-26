// ------------------------------------- TEAMS CONTROLLER ------------------------------------- //
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