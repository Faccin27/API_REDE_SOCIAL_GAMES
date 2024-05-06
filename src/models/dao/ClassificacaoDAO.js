const Classificacao = require("../classificacao");

class ClassificacoesDAO {
  constructor() {
    // Vetor de classificações
    this.classificacoes = [
      // Exemplo de classificações inicializadas
      new Classificacao({ id: 1, nick: "player1", pontuacao: 100 }),
    ];
  }

  // Retorna a lista de classificações
  listar() {
    return this.classificacoes;
  }

  // Retorna uma classificação filtrada pela sua ID
  buscarPorId(id) {
    return this.classificacoes.find(classificacao => classificacao.id === id);
  }

  // Cria e armazena uma nova classificação com data e hora atuais
  criar(classificacao) {
    classificacao.id = this.classificacoes.length > 0 ? this.classificacoes[this.classificacoes.length - 1].id + 1 : 1;
    classificacao.data_hora = new Date(); // Definindo a data e hora atuais
    this.classificacoes.push(classificacao);
    return classificacao.id;
  }

  // Atualiza uma classificação
  atualizar(id, classificacaoAtualizada) {
    const index = this.classificacoes.findIndex(classificacao => classificacao.id === id);
    if (index !== -1) {
      this.classificacoes[index] = classificacaoAtualizada;
    }
  }

  // Deleta uma classificação
  deletar(id) {
    const index = this.classificacoes.findIndex(classificacao => classificacao.id === id);
    if (index !== -1) {
      this.classificacoes.splice(index, 1);
    }
  }
}

module.exports = new ClassificacoesDAO();
