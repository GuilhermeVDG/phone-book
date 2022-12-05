angular.module("phoneBook").controller("phoneBookCtrl", ($scope, $http) => {
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];


  $scope.operadoras = [];
  const carregarContatos = async () => {
    try {
      const response = await $http.get('http://localhost:3050/contatos');
      $scope.contatos = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const carregarOperadoras = async () => {
    try {
      const response = await $http.get('http://localhost:3050/operadoras');
      $scope.operadoras = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  $scope.addContato = async (contato) => {
    contato.data = new Date();
    const response = await $http.post('http://localhost:3050/contatos', contato);
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
    carregarContatos();
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