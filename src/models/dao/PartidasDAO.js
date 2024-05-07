const Partida = require("../partida");
// IogadoresDAO Importados
const JogadoresDAO = require("../dao/JogadoresDAO");

let partidas = [
  //Partidas
  new Partida({ id: 1, time_vencedor: [JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3)], time_perdedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], mvp: JogadoresDAO.buscarPorId(1) }),
  new Partida({ id: 2, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(2)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(3)], mvp: JogadoresDAO.buscarPorId(7) }),
  new Partida({ id: 3, time_vencedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(3)], time_perdedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 4, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(3)], mvp: JogadoresDAO.buscarPorId(2) }),
  new Partida({ id: 5, time_vencedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(1) }),
  new Partida({ id: 6, time_vencedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(5)], mvp: JogadoresDAO.buscarPorId(3) }),
  new Partida({ id: 7, time_vencedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 8, time_vencedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(3) }),
  new Partida({ id: 9, time_vencedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 10, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 11, time_vencedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(2)], time_perdedor: [JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 12, time_vencedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 13, time_vencedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 14, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 15, time_vencedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(2)], time_perdedor: [JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 16, time_vencedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 17, time_vencedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 18, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(5) }),
  new Partida({ id: 19, time_vencedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(2)], time_perdedor: [JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(6)], mvp: JogadoresDAO.buscarPorId(4) }),
  new Partida({ id: 20, time_vencedor: [JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], time_perdedor: [JogadoresDAO.buscarPorId(6), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(4)], mvp: JogadoresDAO.buscarPorId(5) }),
];


class PartidasDAO {
  // Retorna a lista de partidas
  listar() {
    return partidas;
  }

  // Retorna uma partida filtrada pela sua ID
  buscarPorId(id) {
    return partidas.find(partida => partida.id === id);
  }

  // Cria e armazena uma nova partida
  criar(partida) {
    partida.id = partidas.length > 0 ? partidas[partidas.length - 1].id + 1 : 1;
    partidas.push(partida);
    return partida.id;
  }

  // Atualiza uma partida
  atualizar(id, partidaAtualizada) {
    const index = partidas.findIndex(partida => partida.id === id);
    if (index !== -1) {
      partidas[index] = partidaAtualizada;
    }
  }

  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Deleta uma partida
  deletar(id) {
    const index = partidas.findIndex(partida => partida.id === id);
    if (index !== -1) {
      partidas.splice(index, 1);
    }
  }
}

module.exports = new PartidasDAO();
