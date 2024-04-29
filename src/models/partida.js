class Partida {
  constructor({ id, time_vencedor, time_perdedor, mvp }) {
    this.id = id ? id : -1;
    this.time_vencedor = time_vencedor;
    this.time_perdedor = time_perdedor;
    this.mvp = mvp;
  }
}

module.exports = Partida;
