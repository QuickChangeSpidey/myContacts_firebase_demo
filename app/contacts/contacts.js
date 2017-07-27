'use strict';

angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray' ,function($scope,$firebaseArray) {
    
// 
//  var config = {
//    apiKey: "AIzaSyD7YVyOR1RNxzDFRfx9o8NwfAOkF4Xtrrs",
//    authDomain: "mycontacts-b0419.firebaseapp.com",
//    databaseURL: "https://mycontacts-b0419.firebaseio.com",
//    projectId: "mycontacts-b0419",
//    storageBucket: "mycontacts-b0419.appspot.com",
//    messagingSenderId: "412513302790"
//  };
//  firebase.initializeApp(config);
//  console.log('firebase authenticated successfully');    
 
//  var ref = firebase.database().ref();
//    
//  $scope.contacts = $firebaseArray(ref);
    
  $scope.showAddForm = function(){
      
      $scope.addFormShow = true;
  }
  
  $scope.hide = function(){
      
      $scope.addFormShow = false;
  }
    


}]);