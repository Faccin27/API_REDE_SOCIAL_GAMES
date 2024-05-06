const Amizade = require("../models/amizade");
const AmizadesDAO = require('../models/dao/AmizadesDAO');

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
  if (listaAmizades.length === 0) {
    res.status(200).json({ message: "Nenhuma amizade encontrada" });
  } else {
    // Verifica se há uma ID de jogador na requisição
    const jogadorId = req.query.jogadorId;
    if (jogadorId) {
      // Retorna apenas os amigos do jogador especificado
      const amigosDoJogador = this.listarAmigosPorId(jogadorId);
      res.status(200).json({ amigos: amigosDoJogador });
    } else {
      // Retorna a lista de amizades com os detalhes dos amigos
      const amizadesVerbose = listaAmizades.map(amizade => amizade.verbose());
      res.status(200).json({ amizades: amizadesVerbose });
    }
  }
}


  // Mostrar uma amizade (READ)
  show(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (amizade) {
      res.status(200).json({ amizade: amizade.verbose() });
    } else {
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
  }

  // Atualizar uma amizade (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));
    if (amizade) {
      // Verifica se há dados de amizade na requisição
      if (req.body.amigos !== undefined) amizade.amigos = req.body.amigos;

      // Atualiza a amizade na persistência
      AmizadesDAO.atualizar(id, amizade);

      // Faz o response para o browser
      res.status(200).json({ amizade: amizade });
    } else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
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

  // Método para listar todos os amigos de um jogador por sua ID
  listarAmigosPorId(jogadorId) {
    // Filtra a lista de amizades para encontrar todas as amizades do jogador
    const amizadesDoJogador = AmizadesDAO.listar().filter(amizade =>
      amizade.amigos.includes(jogadorId)
    );

    // Extrai os IDs de todos os amigos do jogador
    const idsDosAmigos = amizadesDoJogador.flatMap(amizade =>
      amizade.amigos.filter(amigoId => amigoId !== jogadorId)
    );

    // Retorna os IDs dos amigos do jogador
    return idsDosAmigos;
  }
}

module.exports = new AmizadesController();
