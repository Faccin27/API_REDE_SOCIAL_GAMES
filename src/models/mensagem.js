const JogadorDAO = require('../models/dao/JogadoresDAO'); 

class Mensagem {
  constructor({ id, texto, data_hora, id_remetente, id_destinatario }) {
    this.id = id ? id : -1;
    this.texto = texto;
    this.data_hora = data_hora ? data_hora : new Date();
    this.id_remetente = id_remetente;
    this.id_destinatario = id_destinatario;
  }

  // Retorna uma representação detalhada da mensagem
  verbose() {
    // Faz uma cópia profunda do objeto mensagem
    let mensagem = JSON.parse(JSON.stringify(this));

    // info search
    mensagem.remetente = JogadorDAO.buscarPorId(mensagem.id_remetente).principal();
    mensagem.destinatario = JogadorDAO.buscarPorId(mensagem.id_destinatario).principal();

    return mensagem;
  }

  // Retorna uma representação simplificada da mensagem
  principal() {
    return {
      id: this.id,
      texto: this.texto,
      data_hora: this.data_hora,
      id_remetente: this.id_remetente,
      id_destinatario: this.id_destinatario
    };
  }
}

module.exports = Mensagem;

