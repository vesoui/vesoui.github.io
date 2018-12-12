var App = angular.module('App', []);

App.controller('MainCtrl', function ($scope, $filter, $http) {
  
$scope.gender = null;
 $http.get("clothing.json").then(function(response) {
      $scope.clothing = response.data.clothing;
 });
    
    
  $scope.genderFilter = function () {
           
            return function (item) {
                console.log(item.gender + "  " + $scope.gender);
                if (item.gender === $scope.gender) {
                    return item;
                }
            };
  }


});


App.controller('CollectionsCtrl', function ($scope, $filter, $http) {
  
$scope.gender = null;
 $http.get("collections.json").then(function(response) {
      $scope.clothing = response.data.collections;
 });
    
    


});
