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
    var untappdURL = 'https://api.untappd.com/v4/search';

    $http.get(`${untappdURL}/beer?q=${beer}&client_id=${clientId}&client_secret=${clientSecret}`, function(req, res){
        /*set variable of beers
            response.response.beers*/
    });
  });
})();
