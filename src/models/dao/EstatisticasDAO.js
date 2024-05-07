const Estatisticas = require("../estatistica");
const JogadoresController = require('../../controllers/JogadoresController');

let estatisticas = [
  // Altere aqui para as suas estatisticas
  new Estatisticas({ id: 1, pontuacao: 0, jogosJogados: 0, jogosVencidos: 28, jogosPerdidos: 16 }),
  new Estatisticas({ id: 2, pontuacao: 0, jogosJogados: 0, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 3, pontuacao: 0, jogosJogados: 0, jogosVencidos: 11, jogosPerdidos: 26 }),
  new Estatisticas({ id: 4, pontuacao: 0, jogosJogados: 0, jogosVencidos: 12, jogosPerdidos: 19 }),
  new Estatisticas({ id: 5, pontuacao: 0, jogosJogados: 0, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 6, pontuacao: 75, jogosJogados: 42, jogosVencidos: 30, jogosPerdidos: 12 }),
  new Estatisticas({ id: 7, pontuacao: 60, jogosJogados: 35, jogosVencidos: 20, jogosPerdidos: 15 }),
  new Estatisticas({ id: 8, pontuacao: 88, jogosJogados: 50, jogosVencidos: 45, jogosPerdidos: 5 }),
  new Estatisticas({ id: 9, pontuacao: 45, jogosJogados: 28, jogosVencidos: 10, jogosPerdidos: 18 }),
  new Estatisticas({ id: 10, pontuacao: 92, jogosJogados: 48, jogosVencidos: 46, jogosPerdidos: 2 }),
  new Estatisticas({ id: 11, pontuacao: 30, jogosJogados: 20, jogosVencidos: 5, jogosPerdidos: 15 }),
  new Estatisticas({ id: 12, pontuacao: 85, jogosJogados: 45, jogosVencidos: 40, jogosPerdidos: 5 }),
  new Estatisticas({ id: 13, pontuacao: 70, jogosJogados: 38, jogosVencidos: 25, jogosPerdidos: 13 }),
  new Estatisticas({ id: 14, pontuacao: 50, jogosJogados: 30, jogosVencidos: 15, jogosPerdidos: 15 }),
  new Estatisticas({ id: 15, pontuacao: 95, jogosJogados: 47, jogosVencidos: 45, jogosPerdidos: 2 }),
  new Estatisticas({ id: 16, pontuacao: 40, jogosJogados: 25, jogosVencidos: 10, jogosPerdidos: 15 }),
  new Estatisticas({ id: 17, pontuacao: 80, jogosJogados: 43, jogosVencidos: 35, jogosPerdidos: 8 }),
  new Estatisticas({ id: 18, pontuacao: 55, jogosJogados: 32, jogosVencidos: 20, jogosPerdidos: 12 }),
  new Estatisticas({ id: 19, pontuacao: 90, jogosJogados: 46, jogosVencidos: 42, jogosPerdidos: 4 }),
  new Estatisticas({ id: 20, pontuacao: 65, jogosJogados: 40, jogosVencidos: 25, jogosPerdidos: 15 })
]

class EstatisticasDAO {
  // Retorna a lista de estatisticas
  listar() {
    return estatisticas;
  }

  // Retorna uma estatistica filtrado pela sua id
  buscarPorId(id) {
    return estatisticas.find(estatistica => estatistica.id === id);
  }

  // Verifica se existe uma instância de estatisticas com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena uma nova estatistica
  criar(estatistica) {
    estatistica.id = estatisticas[estatisticas.length - 1].id + 1;
    estatisticas.push(estatistica);
    this.buscarPorId(estatistica.id).calculaEstatistica
    return parseInt(estatistica.id);
  }

  // Atualiza uma estatistica
  atualizar(id, estatisticaAtualizado) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas[index] = estatisticaAtualizado;
    }
  }

  // Deleta um estatistica
  deletar(id) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas.splice(index, 1);
    }
  }
}

module.exports = new EstatisticasDAO();
