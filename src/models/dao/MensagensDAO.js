const { calculaClassificacao } = require("../../controllers/JogadoresController");
const Mensagem = require("../mensagem");
const JogadoresController = require('../../controllers/JogadoresController')

// Vetor de Mensagens
let mensagens = [
  new Mensagem({ id: 3, texto: "Oi, tudo bem?", data_hora: new Date(), id_remetente: 1, id_destinatario: 3 }),
  new Mensagem({ id: 4, texto: "Sim, estou bem. E você?", data_hora: new Date(), id_remetente: 3, id_destinatario: 1 }),
  new Mensagem({ id: 5, texto: "Estou ótimo, obrigado!", data_hora: new Date(), id_remetente: 1, id_destinatario: 4 }),
  new Mensagem({ id: 6, texto: "Que bom ouvir isso!", data_hora: new Date(), id_remetente: 4, id_destinatario: 1 }),
  new Mensagem({ id: 7, texto: "E então, o que você tem feito?", data_hora: new Date(), id_remetente: 1, id_destinatario: 5 }),
  new Mensagem({ id: 8, texto: "Tenho trabalhado bastante. E você?", data_hora: new Date(), id_remetente: 5, id_destinatario: 1 }),
  new Mensagem({ id: 9, texto: "Estou estudando para algumas provas.", data_hora: new Date(), id_remetente: 1, id_destinatario: 6 }),
  new Mensagem({ id: 10, texto: "Boa sorte com isso!", data_hora: new Date(), id_remetente: 6, id_destinatario: 1 }),
  new Mensagem({ id: 11, texto: "Obrigado!", data_hora: new Date(), id_remetente: 1, id_destinatario: 7 }),
  new Mensagem({ id: 12, texto: "Você já decidiu o que vai fazer no final de semana?", data_hora: new Date(), id_remetente: 7, id_destinatario: 1 }),
  new Mensagem({ id: 13, texto: "Ainda não, estou pensando em algumas opções.", data_hora: new Date(), id_remetente: 1, id_destinatario: 8 }),
  new Mensagem({ id: 14, texto: "Se precisar de sugestões, estou aqui!", data_hora: new Date(), id_remetente: 8, id_destinatario: 1 }),
  new Mensagem({ id: 15, texto: "Obrigado, vou considerar!", data_hora: new Date(), id_remetente: 1, id_destinatario: 9 }),
  new Mensagem({ id: 16, texto: "Que tal irmos ao cinema?", data_hora: new Date(), id_remetente: 9, id_destinatario: 1 }),
  new Mensagem({ id: 17, texto: "Parece uma ótima ideia!", data_hora: new Date(), id_remetente: 1, id_destinatario: 10 }),
  new Mensagem({ id: 18, texto: "Então está combinado!", data_hora: new Date(), id_remetente: 10, id_destinatario: 1 }),
  new Mensagem({ id: 19, texto: "Mal posso esperar!", data_hora: new Date(), id_remetente: 1, id_destinatario: 11 }),
  new Mensagem({ id: 20, texto: "Eu também!", data_hora: new Date(), id_remetente: 11, id_destinatario: 1 }),
];


class MensagensDAO {
  // Retorna a lista de mensagens
  listar() {
    return mensagens;
  }

  // Retorna uma mensagem filtrada pela sua ID
  buscarPorId(id) {
    return mensagens.find(mensagem => mensagem.id === id);
  }

  // Cria e armazena uma nova mensagem com data e hora atuais
  criar(mensagem) {
    mensagem.id = mensagens.length > 0 ? mensagens[mensagens.length - 1].id + 1 : 1;
    mensagem.data_hora = new Date(); // Definindo a data e hora atuais
    mensagens.push(mensagem);
    JogadoresController.calculaClassificacao();
    return mensagem.id;

  }

  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Atualiza uma mensagem
  atualizar(id, mensagemAtualizada) {
    const index = mensagens.findIndex(mensagem => mensagem.id === id);
    if (index !== -1) {
      mensagens[index] = mensagemAtualizada;
    }
  }

  // Deleta uma mensagem
  deletar(id) {
    const index = mensagens.findIndex(mensagem => mensagem.id === id);
    if (index !== -1) {
      mensagens.splice(index, 1);
    }
  }
}

module.exports = new MensagensDAO();
