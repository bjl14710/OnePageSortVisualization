 var app = angular.module('multipleInputs',[]);
 
 
 app.controller('multipleInputsCtrl',function($scope){
	 $scope.users = [
	 {}
	];
	
	$scope.sortedArray = [];
	$scope.array = [] ; // holds the numbers that are inputed
	
	$scope.sizeOfInputs = 1; 
	
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
	
	
	
	
	$scope.createArray = function(user){
		$scope.array = []; // empty the array
		$scope.sortedArray = [];
		for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = +document.getElementsByClassName("users-container-inputs-text")[i].value;
			$scope.array.push(val); // setting the array
		}
	}
	
	$scope.number = 0;
	$scope.index = 0;
	
	
	$scope.SetNumber = function(user)
	{
		//var index = $scope.users.indexOf(user); // So it knows what number to set
		$scope.index = $scope.users.indexOf(user); // So it knows what number to set
		
		var val = document.getElementsByClassName("users-container-inputs-text")[$scope.index].value;
		//var number = console.log($scope.users);
		$scope.number = +val;
		
		/*$scope.number.push(+val); // gets us the number
		if($scope.number.length > 1) // saving this code for syntax
		{
			$scope.number.shift(); // gets rid of the first element of the number array
		}*/
	}
	
	
	$scope.Max = 0;
	
	
	
	
	$scope.findMax = function(user)
	{
		var max = +document.getElementsByClassName("users-container-inputs-text")[0].value;
		for(var i = 0; i < $scope.sizeOfInputs; i++)
		{
			var val = document.getElementsByClassName("users-container-inputs-text")[i].value;
			if(+val > +max)
			{
				max = val;
			}
		}
		$scope.Max = max;
	}
	
	$scope.BubbleSort = function()
	{  
		$scope.array2 = []; 
		var Num1 = +$scope.array[0]; 
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
	
	$scope.QuickStart = function()
	{
		$scope.sortedArray = QuickSort(0, $scope.array.length - 1, $scope.array);
		function QuickSort(left,right,array) {
			var index;
		
		if(array.length > 1)
		{
			index = partition(array, left, right);
			
			if(left < index - 1){
				QuickSort(left, index - 1,array);
			}
			
			if(index<right){
				QuickSort(index,right,array);
			}
		}
		return array;
		}
		
		function partition(items, left, right)
		{
			var pivot = +items[Math.floor((right+left) / 2)];
			var i	  = left;
			var j 	  = right;
				
			var NumberHold;
				while(i <= j)
				{
					while(+items[i] < pivot){
						i++; // while left side is smaller than pivot
					}
					while(+items[j] > pivot)
					{
						j--; // while the right side is bigger than pivot
					}
					
					if(i <= j)
					{
						NumberHold = +items[i];
						items[i] = +items[j]; // swapping the numbers
						items[j] = NumberHold;
						i++;
						j--;
					}
				}
				
				return i;
		}
	}
	
	
	$scope.MergeSort = function()
	{
			
		function merge(left,right)
		{
			var arr = [];
			
			while(left.length && right.length)
			{
				if(left[0] < right[0])
				{
					arr.push(left.shift());
				}
				else
				{
					arr.push(right.shift());
				}
			}
			
			return arr.concat(left.slice().concat(right.slice()));
		}
		
		function mergeSort(arr){
			if(arr.length < 2)
			{
				return arr;
			}
			
			const middle = Math.floor(arr.length/2);
			const left = arr.slice(0,middle); // half the array
			const right = arr.slice(middle);
			
			return merge(mergeSort(left), mergeSort(right));
		}
		
		$scope.sortedArray = mergeSort($scope.array);
	}
	
	
	
	
	
 });
		