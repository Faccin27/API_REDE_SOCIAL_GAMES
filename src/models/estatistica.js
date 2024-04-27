const JogadoresController = require("../controllers/JogadoresController");

class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
    this.id = id ? id : -1;
    this.pontuacao = pontuacao ? pontuacao : 0;
    this.jogosJogados = jogosJogados ? jogosJogados : 0;
    this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
    this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }

  // Função chamada quando o jogador que pertence esta estatistica vende uma partida
  partidaGanha() {

  }

  // Função chamada quando o jogador que pertence esta estatistica perde uma partida
  partidaPerdida() {

  }

  // Calcula a pontuação e os jogos jogados da estatistica
  calculaEstatistica() {
    // Calcular a pontuação aqui

    // Calcula os jogos jogados
    this.jogosJogados = this.jogosPerdidos + this.jogosVencidos;
  }
}

module.exports = Estatisticas
