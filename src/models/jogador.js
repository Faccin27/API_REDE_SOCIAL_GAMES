const Estatistica = require("../models/estatistica")
const EstatisticasDAO = require('../models/dao/EstatisticasDAO');
const ConquistasDAO = require('../models/dao/ConquistasDAO');

class Jogador {
  // Construtur da classe Jogador. Recebe um objeto com todas as propriedades do objeto
  constructor({ id, nickName, nome, classificacao, estatisticas, conquistas }) {
    this.id = id ? id : -1;
    this.nickName = nickName;
    this.nome = nome;
    this.classificacao = classificacao ? classificacao : -1;
    this.estatisticas = estatisticas ? estatisticas : EstatisticasDAO.criar(new Estatistica({}))
    this.conquistas = conquistas ? conquistas : {}
  }

  // Prepara o objeto jogador para ser apresentado no browser
  verbose() {
    // Faz uma cópia profunda de jogador
    let jogador = JSON.parse(JSON.stringify(this));

    // Atribui as estatisticas ao jogador
    jogador.estatisticas = EstatisticasDAO.buscarPorId(jogador.estatisticas)

    // Atribui as conquistas ao jogador
    if (jogador.conquistas.length) {
      for (let i = 0; i < jogador.conquistas.length; i++) {
        jogador.conquistas[i] = ConquistasDAO.buscarPorId(jogador.conquistas[i])
      }
    }

    return jogador
  }

  // Lista somente os atributos principais
  principal() {
    let jogador = {
      id: this.id,
      nickName: this.nickName,
    }

    return jogador
  }
}



module.exports = Jogador
