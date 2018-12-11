var App = angular.module('App', []);

App.controller('MainCtrl', function ($scope, $filter, $http) {
  

 $http.get("clothing.json").then(function(response) {
     console.log("XD");
        console.log(response.data);
 });

});