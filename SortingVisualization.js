 var app = angular.module('multipleInputs',[]);
 
 app.controller('multipleInputsCtrl',function($scope){
	 $scope.users = [
	 {}
	];
	
	
	$scope.sizeOfInputs = 1; // number of inputs
	
	$scope.addUser = function(){
		var newUser = {};
		$scope.users.push(newUser);
		$scope.sizeOfInputs++;
	}
	
	$scope.removeUser = function(user){
		var index = $scope.users.indexOf(user);
		$scope.users.splice(index,1);
		$scope.sizeOfInputs--;
	}
	
	$scope.number = [];
	
	$scope.SetNumber = function(user)
	{
		var index = $scope.users.indexOf(user); // So it knows what number to set
		var val = document.getElementsByClassName("users-container-inputs-text")[index].value;
		//var number = console.log($scope.users);
		$scope.number.push(val); // gets us the number
		if($scope.number.length > 1)
		{
			$scope.number.shift(); // gets rid of the first element of the number array
		}
	}
	
	$scope.array = []; // holds the numbers that are inputed
	
	$scope.Max = 0;
	
	$scope.findMax = function(user)
	{
		var max = [];
		for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = document.getElementsByClassName("users-container-inputs-text")[i].value;
			if(val > max)
			{
				max = val;
			}
			$scope.array.push(val); // setting the array
		}
		$scope.Max = max;
	}
 });
		