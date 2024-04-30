class Mensagem {
  constructor({ id, texto, data_hora, id_remetente, id_destinatario }) {
    this.id = id ? id : -1;
    this.texto = texto;
    this.data_hora = data_hora ? data_hora : new Date();
    this.id_remetente = id_remetente;
    this.id_destinatario = id_destinatario;
  }
}

module.exports = Mensagem;
