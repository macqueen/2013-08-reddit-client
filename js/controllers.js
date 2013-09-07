angular.module('myApp.controllers', ['myApp.services', 'myApp.filters'])
.controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.getArticles = function() {
    $http({
      method: 'JSONP',
      url:'http://www.reddit.com/r/RedditLaqueristas.json?jsonp=JSON_CALLBACK'})
    .success(function(data, status){
              var tempArticles = [];
      angular.forEach(data.data.children, function(item){
        tempArticles.push(item.data);
      });
      $scope.articles = tempArticles;
    })
    .error(function(error, status){
      console.log(status, 'There was an error');
    });
  };
  $scope.getArticles();
  $scope.getScore = function(item) {
    return item.data.score;
  };
  $scope.changeView = function(view) {
    $location.path(view);
  };
}])
.controller('EntryController', ['$scope', 'order', function($scope, order){
  $scope.increase = function(){
    order.increase($scope);
    return;
  };
  $scope.decrease = function(){
    order.decrease($scope);
    return;
  };
}])
.controller('login', ['$scope', function($scope){
  $scope.submit = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: {
        username: $scope.username,
        password: $scope.password
      }
    })
    .error(function(err, status){
      console.log(status, " There was an error");
    });
  };
}])
.controller('signup', ['$scope', '$http', function($scope, $http){
  $scope.submit = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:3000/signup',
      data: {
        username: $scope.username,
        password: $scope.password
      }
    })
    .error(function(err, status){
      console.log(status, " There was an error");
    });
  };
}]);