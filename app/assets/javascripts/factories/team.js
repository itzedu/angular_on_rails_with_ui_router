// ------------------------------------- TEAM FACTORY ------------------------------------- //
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
