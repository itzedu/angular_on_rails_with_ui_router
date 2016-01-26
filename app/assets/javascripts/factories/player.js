// ------------------------------------- PLAYER FACTORY ------------------------------------- //
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