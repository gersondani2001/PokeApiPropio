/*codigo de javaScript para componentes logicos en el codigo*/
console.log("Function(Correct)");

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("pre").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



var pokeapilite = angular.module("pokeapilite",[])
pokeapilite.controller("appCtrl",function($scope,$http){


		$scoope.importar = function(){
			$http.get('api.json').success(function(api){
				$scope.equipo = api;
			});
		}


		$scope.importar();




	/*
	$scope.pokeapi = [];

	for(var i = 1; i <= 25; i++){
		
		$scope.importar = function(){

			$http.get('api.json').success(function(api){
				$scope.equipo = api
			})

		}

	}*/


})







		



