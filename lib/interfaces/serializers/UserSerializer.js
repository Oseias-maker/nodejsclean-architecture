'use strict';

const _serializeSingleUser = (usuario) => {
  return { // retorna aqui a consulta feita no banco EM "" o que você quer retornar como objeto e oque ele retorna vc coloca o user.campo da tabela
    'nif': usuario.nif,
    'senha': usuario.senha,
    'nome': usuario.nome,
    'telefone': usuario.telefone,
    'id_depto': usuario.id_depto,
    'email': usuario.email,
    'cfp': usuario.cfp,
    'imagem': usuario.imagem,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }

};