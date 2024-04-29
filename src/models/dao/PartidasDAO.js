const Partida = require("../partida");
// IogadoresDAO Importados
const JogadoresDAO = require("../dao/JogadoresDAO");

let partidas = [
  //Partidas
  new Partida({ id: 1, time_vencedor: [JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3)], time_perdedor: [JogadoresDAO.buscarPorId(4), JogadoresDAO.buscarPorId(5), JogadoresDAO.buscarPorId(1)], mvp: JogadoresDAO.buscarPorId(1) }),
  new Partida({ id: 2, time_vencedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(3), JogadoresDAO.buscarPorId(2)], time_perdedor: [JogadoresDAO.buscarPorId(2), JogadoresDAO.buscarPorId(1), JogadoresDAO.buscarPorId(3)], mvp: JogadoresDAO.buscarPorId(7) }),
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

  // Deleta uma partida
  deletar(id) {
    const index = partidas.findIndex(partida => partida.id === id);
    if (index !== -1) {
      partidas.splice(index, 1);
    }
  }
}

module.exports = new PartidasDAO();
