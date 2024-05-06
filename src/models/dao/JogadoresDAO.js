const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  // Altere aqui para os seus jogadores
  new Jogador({ id: 1, nome: "Dionathan L. de Vargas", nickName: "dion.vargas", classificacao: 2, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Frank G. Allen Vargas", nickName: "Kuxeru", classificacao: 3, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Lauri Astala", nickName: "Bikuir", classificacao: 1, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 4, nome: "Bianka Wismer", nickName: "Estuyr", classificacao: 7, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Baruch Papapanagiotou", nickName: "Viapus", classificacao: 3, estatisticas: 5, conquistas: [1, 5] })
];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }



  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
