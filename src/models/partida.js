const JogadorDAO = require('../models/dao/JogadoresDAO'); // Importa o módulo JogadorDAO

class Partida {
  constructor({ id, time_vencedor, time_perdedor, mvp }) {
    this.id = id ? id : -1;
    this.time_vencedor = time_vencedor;
    this.time_perdedor = time_perdedor;
    this.mvp = mvp;
  }

  //  detalhada da partida
  verbose() {
    //para não influenciar na DB
    let partida = JSON.parse(JSON.stringify(this)); // Cópia profunda do objeto partida

    // Consulta ao JogadorDAO para buscar informações sobre o MVP da partida
    partida.mvp = JogadorDAO.buscarPorId(partida.mvp).principal();

    return partida;
  }

  // smplificada da partida
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