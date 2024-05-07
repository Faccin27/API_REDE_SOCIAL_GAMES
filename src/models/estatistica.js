const JogadoresController = require("../controllers/JogadoresController");


class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
    this.id = id ? id : -1;
    this.pontuacao = pontuacao ? pontuacao : 0;
    this.jogosJogados = jogosJogados ? jogosJogados : 0;
    this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
    this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }

  partidaGanha() {
    this.jogosVencidos++;
    this.calculaEstatistica();
  }

  partidaPerdida() {
    this.jogosPerdidos++;
    this.calculaEstatistica();
  }

  calculaEstatistica() {
    // Calcular os jogos jogados
    this.jogosJogados = this.jogosPerdidos + this.jogosVencidos;

    // Calcular a pontuação
    let pontuacao = (this.jogosVencidos * 10) - (this.jogosPerdidos * 5);
    
    
    // Verificar se a pontuação é negativa e ajustar para 0 se for o caso
    this.pontuacao = Math.max(0, pontuacao);
    console.log(pontuacao)
    
    const jogadoresOrdenados = JogadoresDAO.listar().sort((a, b) => b.pontuacao - a.pontuacao);
        
    for (let i = 0; i < jogadoresOrdenados.length; i++) {
        jogadoresOrdenados[i].classificacao = i + 1;
    }
    
   return jogadoresOrdenados;
    
  }

  if(calculaEstatistica){
    JogadoresController.newfunction();
  }
}

module.exports = Estatisticas;

