var bookly = angular.module("booklyApp", []);

bookly.controller('BooksController', function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)

  $scope.books = books;
  $scope.predicate = 'author';
  $scope.cart = [];
  $scope.total=0;

  $scope.addToCart = function(book){
    $scope.cart.push(book);
    console.log(book);
    $scope.total= $scope.total + book.price;
    // return cart;
  };

  $scope.plural = function(){

    if ($scope.cart.length !== 1){
      return "s";
    }
  };

  $scope.clearcart = function(cart){
    $scope.cart = [];
  };

});
