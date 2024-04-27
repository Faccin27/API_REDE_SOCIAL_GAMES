const Estatistica = require("../models/estatistica")
const EstatisticasDAO = require('../models/dao/EstatisticasDAO');
const JogadoresController = require("./JogadoresController");

class EstatisticasController {
  // Cria uma nova estatistica (CREATE)
  create(req, res) {
    let pontuacao = req.body.pontuacao;
    let jogosJogados = req.body.jogosJogados;
    let jogosVencidos = req.body.jogosVencidos;
    let jogosPerdidos = req.body.jogosPerdidos;

    let estatistica = new Estatistica({ pontuacao, jogosJogados, jogosVencidos, jogosPerdidos });
    let estatisticaId = EstatisticasDAO.criar(estatistica);

    // Faz o response para o browser
    if (estatisticaId)
      res.status(201).json({ estatistica: EstatisticasDAO.buscarPorId(estatisticaId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todas as estatisticas (READ)
  list(req, res) {
    // Copia o array estatisticaes
    let listaEstatisticas = EstatisticasDAO.listar().slice()

    // Faz o response para o browser
    if (listaEstatisticas.length === 0)
      res.status(200).json({ message: "Nenhum estatistica encontrado" })
    else {
      // Percorre o array listaEstatisticas
      for (let estatistica of listaEstatisticas) {
        // Recalcula as estatisticas
        estatistica.calculaEstatistica()
      }
      res.status(200).json({ estatisticas: listaEstatisticas })
    }
  }

  // Mostrar um estatistica (READ)
  show(req, res) {
    let id = req.params.id;
    let estatistica = EstatisticasDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (estatistica) {
      estatistica.calculaEstatistica()
      res.status(200).json({ estatistica: estatistica });
    } else {
      res.status(404).json({ message: 'Estatistica não encontrado' });
    }
  }

  // Atualizar um estatistica (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let estatistica = EstatisticasDAO.buscarPorId(parseInt(id));
    if (estatistica) {
      if (req.body.pontuacao !== undefined) estatistica.pontuacao = parseInt(req.body.pontuacao)
      if (req.body.jogosJogados !== undefined) estatistica.jogosJogados = parseInt(req.body.jogosJogados)
      if (req.body.jogosVencidos !== undefined) estatistica.jogosVencidos = parseInt(req.body.jogosVencidos)
      if (req.body.jogosPerdidos !== undefined) estatistica.jogosPerdidos = parseInt(req.body.jogosPerdidos)

      // Atualiza a estatitica na persistência
      EstatisticasDAO.atualizar(id, estatistica)

      // Atualiza classficação dos jogadores
      JogadoresController.calculaClassificacao()

      // Faz o response para o browser
      res.status(200).json({ estatistica: estatistica });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Estatistica não encontrado' });
    }
  }

  // Deleta uma estatistica (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (EstatisticasDAO.exist(id)) {
      EstatisticasDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Estatistica não encontrado' });
    }
  }
}

module.exports = new EstatisticasController();
