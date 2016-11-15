(function(){
  var app = angular.module('craftd', []);

  app.factory('Values', function(){
    return {
      /* key values of variables
      I want to share between controllers*/
    };
  });

  app.controller('MainCtrl' function($scope, $http, Values){

  });

  app.controller('BeerCtrl', function($scope, $http, Values){

  });
})();
