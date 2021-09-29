'use strict';

module.exports = class {

  constructor(nif, senha, nome, telefone, id_depto, email, cfp, imagem) {
    this.nif = nif;
    this.senha = senha;
    this.nome = nome;
    this.telefone = telefone;
    this.id_depto = id_depto;
    this.email = email;
    this.cfp = cfp;
    this.imagem = imagem;
  }
};