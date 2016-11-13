angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
	$scope.name="";
	$scope.result='';
	var seperator=',';

function splitter(string,seperator)
	{ 	
	return string.split(seperator);
	}
$scope.display=function()
	{ 	

 	$scope.arrayOfStrings= splitter($scope.name,seperator);

	if(($scope.arrayOfStrings.length<=0) || ($scope.arrayOfStrings==""))
		{$scope.result="Please enter data first";}
	else if(($scope.arrayOfStrings.length>0) && ($scope.arrayOfStrings.length<=3))
	  {$scope.result="Enjoy!";}
	else
		$scope.result="Too Much!";
	
	}
}
