angular.module('myApp.controllers', [])
.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.getArticles = function() {
    $http({
      method: 'JSONP',
      url:'http://www.reddit.com/r/all.json?jsonp=JSON_CALLBACK'})
    .success(function(data, status){
      $scope.articles = data.data.children;
    })
    .error(function(error, status){
      console.log('error!', error);
    });
  };
  $scope.getArticles();
}]);