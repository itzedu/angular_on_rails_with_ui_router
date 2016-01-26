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