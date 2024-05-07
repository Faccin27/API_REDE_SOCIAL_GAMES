const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  // Altere aqui para os seus jogadores
  new Jogador({ id: 1, nome: "Dionathan L. de Vargas", nickName: "dion.vargas", classificacao: 2, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Frank G. Allen Vargas", nickName: "Kuxeru", classificacao: 3, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Lauri Astala", nickName: "Bikuir", classificacao: 1, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 4, nome: "Bianka Wismer", nickName: "Estuyr", classificacao: 7, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Baruch Papapanagiotou", nickName: "Viapus", classificacao: 3, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 6, nome: "Marcelo L. de Vargas", nickName: "marce.vargas", classificacao: 0, estatisticas: 6, conquistas: [2, 4] }),
  new Jogador({ id: 7, nome: "Lucas G. Allen Vargas", nickName: "LucKux", classificacao: 0, estatisticas: 7, conquistas: [1, 3] }),
  new Jogador({ id: 8, nome: "Jussi Lahtinen", nickName: "JuLa", classificacao: 0, estatisticas: 8, conquistas: [2, 5] }),
  new Jogador({ id: 9, nome: "Hanna Heinonen", nickName: "HanHei", classificacao: 0, estatisticas: 9, conquistas: [4, 5] }),
  new Jogador({ id: 10, nome: "Juliana Wismer", nickName: "JuliW", classificacao: 0, estatisticas: 10, conquistas: [1, 2] }),
  new Jogador({ id: 11, nome: "Larissa Papapanagiotou", nickName: "LariP", classificacao: 0, estatisticas: 11, conquistas: [3, 4] }),
  new Jogador({ id: 12, nome: "Thiago Ribeiro", nickName: "ThiagoR", classificacao: 0, estatisticas: 12, conquistas: [2, 3] }),
  new Jogador({ id: 13, nome: "Renata Silva", nickName: "ReSilva", classificacao: 0, estatisticas: 13, conquistas: [1, 4] }),
  new Jogador({ id: 14, nome: "Fernanda Oliveira", nickName: "FerOliveira", classificacao: 0, estatisticas: 14, conquistas: [3, 5] }),
  new Jogador({ id: 15, nome: "Gustavo Santos", nickName: "GusSantos", classificacao: 0, estatisticas: 15, conquistas: [2, 5] }),
  new Jogador({ id: 16, nome: "Vanessa Costa", nickName: "VaneCosta", classificacao: 0, estatisticas: 16, conquistas: [1, 3] }),
  new Jogador({ id: 17, nome: "Ricardo Almeida", nickName: "RiAlmeida", classificacao: 0, estatisticas: 17, conquistas: [4, 5] }),
  new Jogador({ id: 18, nome: "Carla Rodrigues", nickName: "CarRodrigues", classificacao: 0, estatisticas: 18, conquistas: [1, 2] }),
  new Jogador({ id: 19, nome: "Paulo Ferreira", nickName: "PauFerreira", classificacao: 0, estatisticas: 19, conquistas: [3, 4] }),
  new Jogador({ id: 20, nome: "Amanda Souza", nickName: "AmanSouza", classificacao: 0, estatisticas: 20, conquistas: [2, 5] })
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
