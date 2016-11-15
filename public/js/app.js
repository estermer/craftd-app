(function(){
  var app = angular.module('craftd', ['ui.router']);

  app.factory('Values', function(){
    var data = {
      /* key values of variables
      I want to share between controllers*/
    };

    return {
      /*getter and setter functions for the data*/
    }
  });

  app.controller('MainCtrl' function($scope, $http, Values){

  });

  app.controller('BeerCtrl', function($scope, $http, Values){

  });
})();
