const Amizade = require("../models/amizade");
const AmizadesDAO = require('../models/dao/amizadesDAO');

class AmizadesController {
  // Cria uma nova amizade (CREATE)
  create(req, res) {
    let amigos = req.body.amigos;

    let amizade = new Amizade({amigos});
    let amizadeId = AmizadesDAO.criar(amizade);

    // Faz o response para o browser
    if (amizadeId)
      res.status(201).json({ amizade: AmizadesDAO.buscarPorId(amizadeId) });
    else
      res.status(500).json({ message: "Não foi possível criar uma amizade" });
  }

  // Lista todas as amizades (READ)
  list(req, res) {
    // Copia o array de amizades
    let listaAmizades = AmizadesDAO.listar().slice();
    
    // Faz o response para o browser
    if (listaAmizades.length === 0)
      res.status(200).json({ message: "Nenhuma amizade encontrada" });
    else
      res.status(200).json({ amizades: listaAmizades });

  }

  // Mostrar uma amizade (READ)
  show(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (amizade) {
      res.status(200).json({ amizade: amizade });
    } else {
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
  }

  // Atualizar uma amizade (UPDATE) - Não implementado neste exemplo
  update(req, res) {
    res.status(405).json({ message: "Atualização de amizade não permitida" });
  }

  // Deletar uma amizade (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (AmizadesDAO.exist(id)) {
      AmizadesDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send();
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
  }
}

module.exports = new AmizadesController();
