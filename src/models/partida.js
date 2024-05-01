const JogadorDAO = require('../models/dao/JogadoresDAO'); // Importa o módulo JogadorDAO

class Partida {
  constructor({ id, time_vencedor, time_perdedor, mvp }) {
    this.id = id ? id : -1;
    this.time_vencedor = time_vencedor;
    this.time_perdedor = time_perdedor;
    this.mvp = mvp;
  }

  verbose() {
    let partida = JSON.parse(JSON.stringify(this)); // Cópia profunda do objeto partida

    // Consulta ao JogadorDAO para buscar informações sobre o MVP da partida
    let mvpJogador = JogadorDAO.buscarPorId(partida.mvp);
    if (mvpJogador) {
      partida.mvp = mvpJogador.principal();
    } else {
      partida.mvp = null; // ou qualquer outro valor que você deseje usar para representar que o jogador não foi encontrado
    }

    return partida;
  }

  principal() {
    return {
      id: this.id,
      time_vencedor: this.time_vencedor,
      time_perdedor: this.time_perdedor,
      mvp: this.mvp
    };
  }
}

module.exports = Partida;
