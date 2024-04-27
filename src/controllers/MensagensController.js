const Mensagem = require("../models/mensagem");
const MensagensDAO = require("../models/dao/MensagensDAO")

class MensagensController {
  // Cria uma nova mensagem (CREATE)
  create(req, res) {
    let texto = req.body.texto;
    let id_remetente = req.body.id_remetente;
    let id_destinatario = req.body.id_destinatario;

    let mensagem = new Mensagem({ texto, id_remetente, id_destinatario });
    let mensagemId = MensagensDAO.criar(mensagem);

    // Faz o response para o browser
    if (mensagemId)
      res.status(201).json({ mensagem: MensagensDAO.buscarPorId(mensagemId) });
    else
      res.status(500).json({ message: "Não foi possível criar a mensagem" });
  }

  // Lista todas as mensagens (READ)
  list(req, res) {
    // Busca o parâmetro na URL
    let id_remetente = req.query.id_remetente;
    let id_destinatario = req.query.id_destinatario;
 
    // Copia o array de mensagens
    let listaMensagens = MensagensDAO.listar().slice();

    // Filtra os resultados se houver alguma query
    if (id_remetente) {
      listaMensagens = listaMensagens.filter(mensagem => mensagem.id_remetente === parseInt(id_remetente));
    }
    if (id_destinatario) {
      listaMensagens = listaMensagens.filter(mensagem => mensagem.id_destinatario === parseInt(id_destinatario));
    }

    // Faz o response para o browser
    if (listaMensagens.length === 0)
      res.status(200).json({ message: "Nenhuma mensagem encontrada" });
    else
      res.status(200).json({ mensagens: listaMensagens });
  }

  // Mostra uma mensagem (READ)
  show(req, res) {
    let id = req.params.id;
    let mensagem = MensagensDAO.buscarPorId(parseInt(id));

    if (mensagem)
      res.status(200).json({ mensagem });
    else
      res.status(404).json({ message: 'Mensagem não encontrada' });
  }

  // Atualiza uma mensagem (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let mensagem = MensagensDAO.buscarPorId(parseInt(id));
    if (mensagem) {
      if (req.body.texto) mensagem.texto = req.body.texto;
      if (req.body.id_remetente) mensagem.id_remetente = req.body.id_remetente;
      if (req.body.id_destinatario) mensagem.id_destinatario = req.body.id_destinatario;

      // Atualiza a mensagem na persistência
      MensagensDAO.atualizar(id, mensagem);
      res.status(200).json({ mensagem });
    } else {
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Deleta uma mensagem (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);
    if (MensagensDAO.exist(id)) {
      MensagensDAO.deletar(id);
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }
}

module.exports = new MensagensController();
