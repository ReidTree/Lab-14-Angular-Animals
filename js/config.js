//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/cat', {
      controller: 'routeCtrl',
      templateUrl: 'cat.html'
    })
    .when('/dog', {
      controller: 'routeCtrl',
      templateUrl: 'dog.html'
    })
    .when('/chinchilla', {
      controller: 'routeCtrl',
      templateUrl: 'chinchilla.html'
    })
    .when('/monkey', {
      controller: 'routeCtrl',
      templateUrl: 'monkey.html'
    });
  //   .otherwise({ redirectTo: "", template:
  //   '<div class="container">' +
  //   '<h2>Dis URL Not Valid!</h2>' +
  //   '<img class="fail" src="http://cdn.thedesigninspiration.com/wp-content/uploads/2010/03/fail-whale/Fail-Whale-15.jpg">' +
  //   '</div>'
  // });




});
