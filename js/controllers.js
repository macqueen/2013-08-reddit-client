angular.module('myApp.controllers', ['myApp.services', 'myApp.filters'])
.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.getArticles = function() {
    $http({
      method: 'JSONP',
      url:'http://www.reddit.com/r/RedditLaqueristas.json?jsonp=JSON_CALLBACK'})
    .success(function(data, status){
      //$scope.articles = data.data.children;
      var tempArticles = [];
      angular.forEach(data.data.children, function(item){
        tempArticles.push(item.data);
      });
      $scope.articles = tempArticles;
    })
    .error(function(error, status){
      console.log('error!', error);
    });
  };
  $scope.getArticles();
  $scope.getScore = function(item) {
    return item.data.score;
  };
}])
.controller('EntryController', ['$scope', 'order', function($scope, order){

  //$scope.id = $scope.item.data.id;
  // order.setRank($scope);
  $scope.increase = function(){
    order.increase($scope);
    return;
  };
  $scope.decrease = function(){
    order.decrease($scope);
    return;
  };
}]);