(function(){
  var app = angular.module('craftd', ['ui.router']);

  //USER CONTROLLER
  //=========================================================================
  app.controller('UserCtrl', function($scope, $http, $state, $stateParams){
    var usersURL = 'http://localhost:3000';
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


    // search beers from the untapped API
    $scope.searchBeers = function(searchTerm){
      $http.get(`${beersURL}/env`)
        .then(function(response){
          return response.data.env;
        })
        .then(function(env){
          $http.get(`${untappdURL}/beer?q=${searchTerm}&client_id=${env.clientId}&client_secret=${env.clientSecret}`)
            .then(function(response){
              console.log(response.data.response.beers.items);
              $scope.beersSearched = response.data.response.beers.items;
            })
            .catch(function(err){
              console.log(err);
            });
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.previewBeer = function(beer){
      $state.go('preview-beer', {url: '/preview-beer'});
      $scope.beerToPreview = beer;
    };

    $scope.showBeer = function(beer){
      $state.go('show-beer', {url: '/show-beer'});
      $scope.beerToPreview = beer;
    };

    $scope.beerCheckIn = function(input){
      $http.post(`${beersURL}`, {
          name: $scope.beerToPreview.beer.beer_name,
          description: $scope.beerToPreview.beer.beer_description,
          abv: $scope.beerToPreview.beer.beer_abv,
          style: $scope.beerToPreview.beer.beer_style,
          img: $scope.beerToPreview.beer.beer_label,
          comment: input.comment,
          rating: input.rating
        })
        .then(function(response){
          console.log('BEER CREATED AND ADDED >>>>>>>>>>>>', response.data.user.beers);
          console.log('ADDED TO USER >>>>>>>>>>>>', response.data.user);
          $scope.currentUser = response.data.user;
          return response.data.user
        })
        .then(function(user){
          $state.go('user-home', {url: '/user-home'});
        })
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.clearSearchResults = function(){
      $scope.beersSearched = null;
    };

  });
  //=========================================================================

})();
