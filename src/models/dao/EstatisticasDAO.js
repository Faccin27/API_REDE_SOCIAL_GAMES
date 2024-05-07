const Estatisticas = require("../estatistica");
const JogadoresController = require('../../controllers/JogadoresController');

let estatisticas = [
  // Altere aqui para as suas estatisticas
  new Estatisticas({ id: 1, pontuacao: 0, jogosJogados: 0, jogosVencidos: 28, jogosPerdidos: 16 }),
  new Estatisticas({ id: 2, pontuacao: 0, jogosJogados: 0, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 3, pontuacao: 0, jogosJogados: 0, jogosVencidos: 11, jogosPerdidos: 26 }),
  new Estatisticas({ id: 4, pontuacao: 0, jogosJogados: 0, jogosVencidos: 12, jogosPerdidos: 19 }),
  new Estatisticas({ id: 5, pontuacao: 0, jogosJogados: 0, jogosVencidos: 23, jogosPerdidos: 29 })
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
