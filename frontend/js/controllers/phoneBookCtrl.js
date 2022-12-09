angular.module("phoneBook").controller("phoneBookCtrl", ($scope, contatosAPI, serialGenerator) => {
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];


  $scope.operadoras = [];
  const carregarContatos = async () => {
    try {
      const response = await contatosAPI.getContatos();
      $scope.contatos = response.data;
    } catch (error) {
      $scope.error = 'Não foi possível carregar seus contatos'
      console.log(error);
    }
  }

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
    contato.data = new Date();
    try {
      const response = await contatosAPI.postContato(contato);
      $scope.contatos = response.data;
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    } catch (error) {
      console.log(error);
    }
  };
  $scope.removeContatos = (contatos) => {
    $scope.contatos = contatos.filter(contato => !contato.selecionado);
  };
  $scope.isContatoSelecionado = contatos => {
    return contatos.some(contato => contato.selecionado)
  };
  $scope.ordernarPor = campo => {
    $scope.ordenacao = campo;
    $scope.direcao = !$scope.direcao;
  };

  carregarContatos();
  carregarOperadoras();
});