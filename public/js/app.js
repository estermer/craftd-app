(function(){
  var app = angular.module('craftd', ['ui.router']);

  //USER CONTROLLER
  //=========================================================================
  app.controller('UserCtrl', function($scope, $http, $state, $stateParams){
    var usersURL = 'http://localhost:3000/users';
    var beersURL = 'http://localhost:3000/beers';
    var untappdURL = 'https://api.untappd.com/v4/search';


    $scope.isLoggedIn = false;


    $scope.loginUser = function(user){
      $http.post(`${usersURL}/login`, user)
        .then(function(response){
          $scope.isLoggedIn = true;
          console.log("USER LOGGED IN >>>>>>>>>", response.data.user);
          $scope.currentUser = response.data.user;
          return response.data.user;
        })
        .then(function(user){
          $state.go('user-home', {url: '/user-home'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.registerUser = function(user){
      console.log("USER To REGISTER >>>>>>>>>>", user);
      $http.post(`${usersURL}`, user)
        .then(function(response){
          $scope.isLoggedIn = true;
          console.log("USER LOGGED IN >>>>>>>>>", response.data.user);
          $scope.currentUser = response.data.user;
          return response.data.user;
        })
        .then(function(user){
          $state.go('user-home', {url: '/user-home'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.logoutUser = function(){
      $http.delete(`${usersURL}`)
        .then(function(response){
          console.log("<<<<<<<<<<< LOGGING OUT", response.data.user);
          $scope.isLoggedIn = false;
          $scope.currentUser = response.data.user;
          $state.go('home', {url: '/'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    



    //search beers from the untapped API
    // self.searchBeers = function(searchTerm){
    //   $http.get(`${untappdURL}/beer?q=${searchTerm}&client_id=${clientId}&client_secret=${clientSecret}`, function(req, res){
    //       /*set variable of beers
    //           response.response.beers.items <<< items is an array*/
    //   });
    // };

  });
  //=========================================================================

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
