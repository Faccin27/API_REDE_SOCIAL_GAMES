const Classificacao = require("../classificacao");

// Vetor de Classificacoes
let classificacoes = [
  // Exemplo de classificacoes inicializadas
  new Classificacao({ id: 1, nick: "player1", pontuacao: 100 }),
];

class ClassificacoesDAO {
  // Retorna a lista de classificacoes
  listar() {
    return classificacoes;
  }

  // Retorna uma classificacao filtrada pela sua ID
  buscarPorId(id) {
    return classificacoes.find(classificacao => classificacao.id === id);
  }

  // Cria e armazena uma nova classificacao com data e hora atuais
  criar(classificacao) {
    classificacao.id = classificacoes.length > 0 ? classificacoes[classificacoes.length - 1].id + 1 : 1;
    classificacao.data_hora = new Date(); // Definindo a data e hora atuais
    classificacoes.push(classificacao);
    return classificacao.id;
  }

  // Atualiza uma classificacao
  atualizar(id, classificacaoAtualizada) {
    const index = classificacoes.findIndex(classificacao => classificacao.id === id);
    if (index !== -1) {
      classificacoes[index] = classificacaoAtualizada;
    }
  }

  // Deleta uma classificacao
  deletar(id) {
    const index = classificacoes.findIndex(classificacao => classificacao.id === id);
    if (index !== -1) {
      classificacoes.splice(index, 1);
    }
  }
}

module.exports = new ClassificacaoDAO();
