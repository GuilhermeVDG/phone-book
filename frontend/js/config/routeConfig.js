angular.module("phoneBook").config(function ($routeProvider){
  $routeProvider.when('/contatos', {
    templateUrl: 'view/contatos.html',
    controller: 'phoneBookCtrl'
  });

  $routeProvider.when("/novoContato", {
    templateUrl: 'view/novoContato.html',
    controller: 'novoContatoCtrl'
  });
});