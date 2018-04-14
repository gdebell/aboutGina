'use strict';

angular.module('myApp.footer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/footer', {
    templateUrl: 'footer/footer.html',
    controller: 'footerCtrl'
  });
}])

.controller('footerCtrl', [function() {

}]);
