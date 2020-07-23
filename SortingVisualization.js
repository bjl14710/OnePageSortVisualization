 var app = angular.module('multipleInputs',[]);
 
 app.controller('multipleInputsCtrl',function($scope){
	 $scope.users = [
	 {}
	];
	
	$scope.sortedArray = [];
	
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
	
	
	$scope.array = [] ; // holds the numbers that are inputed
	
	
	$scope.createArray = function(user){
		$scope.array = []; // empty the array
		for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = document.getElementsByClassName("users-container-inputs-text")[i].value;
			$scope.array.push(val); // setting the array
		}
	}
	
	$scope.number = [];
	
	$scope.SetNumber = function(user)
	{
		var index = $scope.users.indexOf(user); // So it knows what number to set
		var val = document.getElementsByClassName("users-container-inputs-text")[index].value;
		//var number = console.log($scope.users);
		$scope.number.push(+val); // gets us the number
		if($scope.number.length > 1)
		{
			$scope.number.shift(); // gets rid of the first element of the number array
		}
	}
	
	
	$scope.Max = 0;
	
	
	
	
	$scope.findMax = function(user)
	{
		var max = +document.getElementsByClassName("users-container-inputs-text")[0].value;
		for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = document.getElementsByClassName("users-container-inputs-text")[i].value;
			if(val > max)
			{
				max = val;
			}
		}
		$scope.Max = max;
		//$scope.array = [];
		//max = 0;
	}
	
	$scope.BubbleSort = function(user)
	{ // start off with bubble sort. 
		$scope.array2 = []; 
		/*for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = document.getElementsByClassName("users-container-inputs-text")[i].value;
			$scope.array.push(val); // setting the array
		}*/
		var Num1 = +$scope.array[0]; // the numbers we need switch the smaller and bigger
		var Num2 = +$scope.array[1];
		for(var j = 0; j < $scope.array.length; j++)
		{
			for(var i = 0; i < $scope.array.length-1; i++)
			{
				Num1 = +$scope.array[i];
				Num2 = +$scope.array[i+1];
				if(Num1 > Num2)
				{
					$scope.array[i] = Num2;
					$scope.array[i+1] = Num1; // switching the numbers 
				}
			}
		}
		$scope.sortedArray = $scope.array;
		//$scope.array2 = []; // emptying the array
	}
	
 });
		