(function(){
  var app = angular.module('craftd', ['ui.router']);

  app.factory('Values', function(){
    var data = {
      currentUser: {}
    };

    return {
      setCurrentUser: function(user){
        data.currentUser = user;
      },
      getCurrentUser: function(){
        return data.currentUser;
      }
    };
  });

  //controls login, registration
  app.controller('UserCtrl', function($scope, $http, $state, $stateParams, Values){
    var rootURL = 'http://localhost:3000';
    // login, register,<<<< non user / logged in user >>>>>>> home, search beers, logout
    $scope.isLoggedIn = false;
    console.log($scope.isLoggedIn);

    //functions for redirecting Users to their different views

    $scope.userLogin = function(user){
      $http.get(`${rootURL}/users/login`, user)
        .then(function(response){
          $scope.isLoggedIn = true;
          Values.setCurrentUser(response.data.user)
          $state.go('user-home', {url: '/user-home'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.registerUser = function(user){

    };

    $scope.logoutUser = function(){
      $http.delete(`${rootURL}/users/logout`)
        .then(function(response){
          console.log("<<<<<<<<<<<", response.data.message);
          $scope.isLoggedIn = false;
          Values.setCurrentUser({});
          $state.go('home', {url: '/'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.changeStatus = function(){
      $scope.isLoggedIn = true;
      $state.go('user-home', {url: '/user-home'});
    };
  });

  app.controller('BeerCtrl', function($scope, $http, $state, $stateParams, Values){
    var untappdURL = 'https://api.untappd.com/v4/search';

    $scope.currentUser = Values.getCurrentUser();

    //search beers from the untapped API
    self.searchBeers = function(searchTerm){
      $http.get(`${untappdURL}/beer?q=${searchTerm}&client_id=${clientId}&client_secret=${clientSecret}`, function(req, res){
          /*set variable of beers
              response.response.beers.items <<< items is an array*/
      });
    };

  });
})();

//example untapped search for beers
// "https://api.untappd.com/v4/search/beer?q=yeungling&client_id=EF069661F4FAC630951497D7B63F60707CB2AFB3&client_secret=D2C9F0E189E077321D895A4330FE070D249A1C7B"

// {
//   "meta": {
//     "code": 200,
//     "response_time": {
//       "time": 0.123,
//       "measure": "seconds"
//     },
//     "init_time": {
//       "time": 0.008,
//       "measure": "seconds"
//     }
//   },
//   "notifications": [],
//   "response": {
//     "message": "",
//     "brewery_id": false,
//     "search_type": "",
//     "type_id": 0,
//     "search_version": 3,
//     "found": 21,
//     "offset": 0,
//     "limit": 25,
//     "term": "yeungling",
//     "parsed_term": "yeungling*",
//     "beers": {
//       "count": 20,
//       "items": [
//         {
//           "checkin_count": 1046875,
//           "have_had": false,
//           "your_count": 0,
//           "beer": {
//             "bid": 16649,
//             "beer_name": "Traditional Lager",
//             "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-16649_cf1d5_sm.jpeg",
//             "beer_abv": 4.4,
//             "beer_slug": "yuengling-brewery-traditional-lager",
//             "beer_ibu": 0,
//             "beer_description": "An iconic American Lager famous for its rich amber color and medium bodied flavor with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops, this true original delivers a well balanced taste with very distinct character.\n\nLearn more: http://www.yuengling.com/lager",
//             "created_at": "Fri, 24 Dec 2010 13:33:40 +0000",
//             "beer_style": "Lager - American Amber / Red",
//             "auth_rating": 0,
//             "wish_list": false,
//             "in_production": 1
//           },
