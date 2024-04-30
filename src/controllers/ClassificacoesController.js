const JogadoresDAO = require('../models/dao/JogadoresDAO');

class ClassificacoesController {
  // Lista classificação ordenada dos 10 primeiros jogadores
  listaClassificacao(req, res) {
    // Obtém a lista de jogadores ordenada pela classificação
    let jogadoresOrdenados = JogadoresDAO.listar().sort((a, b) => b.classificacao - a.classificacao);

    // Limita a lista aos 10 primeiros jogadores
    let top10Jogadores = jogadoresOrdenados.slice(0, 10);

    // Faz o response para o navegador
    res.status(200).json({ top10Jogadores });
  }

  // Atualiza a classificação dos jogadores pela pontuação das suas estatísticas
  calculaClassificacao() {
    let jogadores = JogadoresDAO.listar();

    // Atualiza a classificação de cada jogador com base em suas estatísticas
    jogadores.forEach(jogador => {
      let pontuacaoTotal = jogador.estatisticas.reduce((total, estatistica) => total + estatistica.pontuacao, 0);
      jogador.classificacao = pontuacaoTotal;
      JogadoresDAO.atualizar(jogador.id, jogador);
    });

    // Retorna uma mensagem de sucesso ou qualquer outro tratamento desejado
    return "Classificação atualizada com sucesso!";
  }
}

module.exports = new ClassificacoesController();
