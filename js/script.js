var Pokemon = angular.module("Pokemon",[])
/* Modulo para mi pagina Web*/
Pokemon.controller("pokedex", function($rootScope,$scope,$http){
	$scope.pokedexB = [];
	/*siclo*/
	for (var i = 0; i < 100; i++) {	
		
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
		}).then(function callbackSuccess(y){
			console.log(y)
		$scope.pokedexB.push(y);
		})
	}
})