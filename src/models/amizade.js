const Jogador = require('./Jogador'); // Importe a classe Jogador, se necessário
const JogadorDAO = require('../models/dao/JogadoresDAO'); // Importe o DAO de Jogador, se necessário

class Amizade {
  constructor({ id, amigos }) {
    this.id = id ? id : -1;
    this.amigos = amigos;
  }

  // Função para obter uma representação detalhada da amizade
  verbose() {
    // Faça uma cópia profunda do objeto amizade
    let amizade = JSON.parse(JSON.stringify(this));

    // Se houver IDs de amigos, busque as informações detalhadas dos amigos
    if (amizade.amigos && amizade.amigos.length) {
      // Mapeie cada ID de amigo para obter detalhes usando o DAO de Jogador
      amizade.amigos = amizade.amigos.map(amigoId => {
        const amigo = JogadorDAO.buscarPorId(amigoId); // Supondo que existe um método buscarPorId no DAO de Jogador
        return amigo ? amigo.principal() : null;
      });
    }

    return amizade;
  }

  principal() {
    let amigosVerbose = []
    for(i = 0; i > this.amigos.length; i++){
      let jogadorVerbose = JogadorDAO.buscarPorId(this.amigos[i]).principal()
      amigosVerbose.push(jogadorVerbose)
    }
    let amizade = {
      id: this.id,
      amigos: amigosVerbose
    };
    return amizade;
  }
}

module.exports = Amizade;
