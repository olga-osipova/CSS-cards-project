$(document).ready(function(){
$("i").click(function(){
	$(".container-rotated").toggleClass("container-origin");
	console.log('On');
});

});


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {  


   $scope.edit = function(card) {
   $scope.card = card;
   console.log($scope.card);
   $scope.model = $scope[$scope.card];
   $("#myModal").modal();     
   
   };
   
   $scope.saveChanges = function() {
   var content = $scope.model;
   console.log($scope.model);
   $scope[$scope.card] = content;
   };
   
 });
 
