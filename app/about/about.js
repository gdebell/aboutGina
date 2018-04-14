'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'app/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {

}]);
