angular.module("phoneBook").factory("contatosAPI", ($http) => {
  const _getContatos = () => {
    return $http.get("http://localhost:3050/contatos");
  };

  const _getOperadoras = () => {
    return $http.get("http://localhost:3050/operadoras");
  }

  const _postContato = contato => {
    return $http.post('http://localhost:3050/contatos', contato);
  };

  return {
    getContatos: _getContatos,
    getOperadoras: _getOperadoras,
    postContato: _postContato
  };
});