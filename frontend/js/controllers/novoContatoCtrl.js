angular.module("phoneBook").controller("novoContatoCtrl", function ($scope, $location,contatosAPI, serialGenerator) {
  $scope.app = "Lista Telefônica";

  const carregarOperadoras = async () => {
    try {
      const response = await contatosAPI.getOperadoras();
      $scope.operadoras = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  $scope.addContato = async (contato) => {
    contato.serial = serialGenerator.generate();
    try {
      await contatosAPI.postContato(contato);
      delete $scope.contato;
      $location.path("/contatos");
    } catch (error) {
      console.log(error);
    }
  };
  carregarOperadoras();
});