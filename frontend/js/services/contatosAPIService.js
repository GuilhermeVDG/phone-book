angular.module("phoneBook").factory("contatosAPI", ($http, config) => {
  const _getContatos = () => {
    return $http.get(`${config.baseUrl}/contatos`);
  };

  const _getOperadoras = () => {
    return $http.get(`${config.baseUrl}/operadoras`);
  }

  const _postContato = contato => {
    return $http.post(`${config.baseUrl}/contatos`, contato);
  };

  return {
    getContatos: _getContatos,
    getOperadoras: _getOperadoras,
    postContato: _postContato
  };
});