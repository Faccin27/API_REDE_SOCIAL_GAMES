const Partida = require("../models/partida");
const PartidasDAO = require('../models/dao/PartidasDAO');
const JogadoresController = require("../controllers/JogadoresController");
const estatisticajs = require("../models/estatistica")

class PartidasController {
  // Cria uma nova partida (CREATE)
  create(req, res) {
    let nome = req.body.nome;
    let jogadoresVencedores = req.body.jogadoresVencedores; 
    let jogadoresPerdedores = req.body.jogadoresPerdedores;

    let partida = new Partida({nome});
    let partidaId = PartidasDAO.criar(partida);

    if (partidaId) {
      // Para cada jogador vencedor, chama a função partidaGanha
      jogadoresVencedores.forEach(jogadorId => {
        // Chama a função partidaGanha com o ID do jogador vencedor
        partidaGanha(jogadorId);
      });

      // para cada jogador perdedor, chama funcao partidaPerdida
      jogadoresPerdedores.forEach(jogadorId => {
        // chama funcao com id do jogador
        partidaPerdida(jogadorId)
      });

      res.status(201).json({ partida: PartidasDAO.buscarPorId(partidaId) });
    } else {
      res.status(500).json({ message: "Não foi possível criar uma partida" });
    }
  }

  // Lista todas as partidas (READ)
  list(req, res) {
    // Copia o array de amizades
    let listaAmizades = AmizadesDAO.listar().slice();
    

    if (listaAmizades.length === 0)
      res.status(200).json({ message: "Nenhuma amizade encontrada" });
    else {
      const jogadorId = req.query.jogadorId;
      if (jogadorId) {
        const amigosDoJogador = this.listarAmigosPorId(jogadorId);
        res.status(200).json({ amigos: amigosDoJogador });
      } else {
        res.status(200).json({ amizades: listaAmizades });
      }
    }
  }

  // Mostrar uma partida (READ)
  show(req, res) {
    let id = req.params.id;
    let partida = PartidasDAO.buscarPorId(parseInt(id));
  
    if (partida) {
      // Cria uma nova variável que recebe a versão verbosa da partida
      let partidaVerbose = partida.verbose();
      // Faz o response para o browser
      res.status(200).json({ partida: partidaVerbose });
    } else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Partida não encontrada' });
    }
  
  }

  // Atualizar uma partida (UPDATE) - Não implementado neste exemplo
  update(req, res) {
    res.status(405).json({ message: "Atualização de partida não permitida" });
  }

  // Deletar uma partida (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (PartidasDAO.exist(id)) {
      PartidasDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send();
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Partida não encontrada' });
    }
  }
}

module.exports = new PartidasController();
