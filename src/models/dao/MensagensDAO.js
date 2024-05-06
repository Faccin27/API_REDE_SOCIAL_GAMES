const { calculaClassificacao } = require("../../controllers/JogadoresController");
const Mensagem = require("../mensagem");
const JogadoresController = require('../../controllers/JogadoresController')

// Vetor de Mensagens
let mensagens = [
  // Exemplo de mensagens inicializadas
  new Mensagem({ id: 1, texto: "Olá!", data_hora: new Date(), id_remetente: 1, id_destinatario: 2 }),
  new Mensagem({ id: 2, texto: "Como você está?", data_hora: new Date(), id_remetente: 2, id_destinatario: 1 }),
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
