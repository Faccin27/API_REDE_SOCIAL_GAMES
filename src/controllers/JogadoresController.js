const Jogador = require("../models/jogador")
const JogadoresDAO = require('../models/dao/JogadoresDAO');
const EstatisticasDAO = require("../models/dao/EstatisticasDAO");

class JogadoresController {
  // Cria um novo jogador (CREATE)
  create(req, res) {
    let nickName = req.body.nickName;
    let nome = req.body.nome;

    let jogador = new Jogador({ nickName, nome });
    let jogadorId = JogadoresDAO.criar(jogador);

    // Faz o response para o browser
    if (jogadorId)
      res.status(201).json({ jogador: JogadoresDAO.buscarPorId(jogadorId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todos os jogadors (READ)
  list(req, res) {
    // Busca o parâmetro na URL
    let nomeSearch = req.query.nomeSearch;
    let nickSearch = req.query.nickSearch;

    // Copia o array jogadores
    let listaJogadores = JogadoresDAO.listar().slice()

    // Filtra os resultados se tiver alguma query
    if (nomeSearch) {
      listaJogadores = listaJogadores.filter(jogador => jogador.nome.toUpperCase().includes(nomeSearch.toUpperCase()));
    }
    if (nickSearch) {
      listaJogadores = listaJogadores.filter(jogador => jogador.nickName.toUpperCase().includes(nickSearch.toUpperCase()));
    }

    // Faz o response para o browser
    if (listaJogadores.length === 0)
      res.status(200).json({ message: "Nenhum jogador encontrado" })
    else {
      // Cria um novo array de jogadores
      let listaJogadoresVerbose = []
      // Percorre o array listaJogadores
      for (let jogador of listaJogadores) {
        // Cria uma nova variável que recebe a versão com os dados principais de jogador
        let jogadorVerbose = jogador.principal()
        // Atribui o novo jogador ao novo array
        listaJogadoresVerbose.push(jogadorVerbose)
      }
      res.status(200).json({ jogadores: listaJogadoresVerbose })
    }
  }

  // Mostrar um jogador (READ)
  show(req, res) {
    let id = req.params.id;
    let jogador = JogadoresDAO.buscarPorId(parseInt(id));

    if (jogador) {
      // Cria uma nova variável que recebe a versão verbosa de jogador
      let jogadorVerbose = jogador.verbose()
      // Faz o response para o browser
      res.status(200).json({ jogador: jogadorVerbose });
    } else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Atualizar um jogador (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let jogador = JogadoresDAO.buscarPorId(parseInt(id));
    if (jogador) {
      if (req.body.nickName) jogador.nickName = req.body.nickName
      if (req.body.nome) jogador.nome = req.body.nome
      if (req.body.classificacao) jogador.classificacao = req.body.classificacao
      if (req.body.estatisticas) jogador.estatisticas = req.body.estatisticas
      if (req.body.conquistas) jogador.conquistas = req.body.conquistas


      // Atualiza a Jogador na persistência
      JogadoresDAO.atualizar(id, jogador)
      // Cria uma nova variável que recebe a versão verbosa de jogador
      let jogadorVerbose = jogador.verbose()
      // Faz o response para o browser
      res.status(200).json({ jogador: jogadorVerbose });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Deleta um jogador (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (JogadoresDAO.exist(id)) {
      JogadoresDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  }

  // Lista classificação ordenada dos 10 primeiros jogadores
  listaClassificacao(req, res) {

  }

  // Atualiza a classificação dos jogadores pela ponduação das suas estatisticas
  calculaClassificacao() {

  }
}

module.exports = new JogadoresController();
