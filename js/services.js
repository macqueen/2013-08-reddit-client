angular.module('myApp.services', [])
.factory('order', function(){
  //var ranks = {};
  // {$scope.articles.item.data.id: }
  // for each article, ranks[article#] =  || 0
  return {
    increase: function(item){
      console.log(item);
      item.item.score++;
    },
    decrease: function(item){
      item.item.score--;
    }
  };
});