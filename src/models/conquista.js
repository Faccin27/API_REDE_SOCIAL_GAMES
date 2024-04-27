class Conquista {
  constructor({ id, nome, descricao }) {
    this.id = id ? id : -1;
    this.nome = nome;
    this.descricao = descricao;
  }
}

module.exports = Conquista
