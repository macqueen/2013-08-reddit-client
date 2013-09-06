angular.module('myApp.services', [])
.factory('SessionService', ['serverRoute', 
  function(serverRoute) {
    
  }])
.factory('order', function(){
  return {
    increase: function(item){
      item.item.score++;
    },
    decrease: function(item){
      item.item.score--;
    }
  };
});