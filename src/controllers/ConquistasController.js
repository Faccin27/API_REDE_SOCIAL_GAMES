const Conquista = require("../models/conquista")
const ConquistasDAO = require('../models/dao/ConquistasDAO');

class ConquistasController {
  // Cria uma nova conquista (CREATE)
  create(req, res) {
    let nome = req.body.nome;
    let descricao = req.body.descricao;

    let conquista = new Conquista({ nome, descricao });
    let conquistaId = ConquistasDAO.criar(conquista);

    // Faz o response para o browser
    if (conquistaId)
      res.status(201).json({ conquista: ConquistasDAO.buscarPorId(conquistaId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todas as conquistas (READ)
  list(req, res) {
    // Copia o array conquistaes
    let listaConquistas = ConquistasDAO.listar().slice()

    // Faz o response para o browser
    if (listaConquistas.length === 0)
      res.status(200).json({ message: "Nenhum conquista encontrado" })
    else
      res.status(200).json({ conquistas: listaConquistas })
  }

  // Mostrar um conquista (READ)
  show(req, res) {
    let id = req.params.id;
    let conquista = ConquistasDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (conquista) {
      res.status(200).json({ conquista: conquista });
    } else {
      res.status(404).json({ message: 'Conquista não encontrado' });
    }
  }

  // Atualizar um conquista (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let conquista = ConquistasDAO.buscarPorId(parseInt(id));
    if (conquista) {
      if (req.body.nome) conquista.nome = req.body.nome
      if (req.body.descricao) conquista.descricao = req.body.descricao

      // Atualiza a Conquista na persistência
      ConquistasDAO.atualizar(id, conquista)
      // Faz o response para o browser
      res.status(200).json({ conquista: conquista });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Conquista não encontrado' });
    }
  }

  // Deleta uma conquista (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (ConquistasDAO.exist(id)) {
      ConquistasDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Conquista não encontrado' });
    }
  }
}

module.exports = new ConquistasController();
