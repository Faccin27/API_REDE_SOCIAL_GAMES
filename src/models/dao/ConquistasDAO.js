const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  new Conquista({ id: 1, nome: "Qualquer meio", descricao: "Elimine 3 inimigos com um único uso da Aniquilação de Ramattra" }),
  new Conquista({ id: 2, nome: "Dor Incomparável", descricao: "Bloqueio 300 danifique e sobreviva em um único uso da Forma Nêmesis de Ramattra" }),
  new Conquista({ id: 3, nome: "Adrenaline Junkie", descricao: "Tenha 7 das feridas da Junker Queen ativas nos inimigos ao mesmo tempo em Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 4, nome: "Coup De Gracie", descricao: "Use a lâmina irregular e carnificina de Junker Queen para puxar e matar um inimigo em Quick ou Compet Jogo ativo" }),
  new Conquista({ id: 5, nome: "On the Move", descricao: "Mate um inimigo com um tiro na cabeça do Railgun carregado enquanto desliza no Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 6, nome: "Mestre da Infiltração", descricao: "Complete uma partida sem ser detectado uma única vez" }),
  new Conquista({ id: 7, nome: "Domador de Feras", descricao: "Derrote um total de 100 animais selvagens" }),
  new Conquista({ id: 8, nome: "Olho de Falcão", descricao: "Acerte 10 tiros consecutivos no alvo com precisão de 90% ou mais" }),
  new Conquista({ id: 9, nome: "Rei das Fugas", descricao: "Sobreviva a 10 emboscadas consecutivas" }),
  new Conquista({ id: 10, nome: "Amigo do Ambiente", descricao: "Recicle 1000 itens em ambientes urbanos" }),
  new Conquista({ id: 11, nome: "Colecionador de Relíquias", descricao: "Encontre e colete 50 artefatos antigos" }),
  new Conquista({ id: 12, nome: "Mestre do Disfarce", descricao: "Passe 1 hora em jogo sem ser reconhecido por nenhum NPC" }),
  new Conquista({ id: 13, nome: "Exterminador de Pragas", descricao: "Elimine 500 insetos mutantes" }),
  new Conquista({ id: 14, nome: "Domador de Elementos", descricao: "Controle com sucesso 5 tempestades naturais" }),
  new Conquista({ id: 15, nome: "Desafiante Supremo", descricao: "Vença 10 desafios extremos sem sofrer nenhum dano" }),
  new Conquista({ id: 16, nome: "Salvador de Civilizações", descricao: "Proteja com sucesso 3 cidades de invasões alienígenas" }),
  new Conquista({ id: 17, nome: "Mestre das Artes Marciais", descricao: "Vença 50 lutas de artes marciais consecutivas" }),
  new Conquista({ id: 18, nome: "Explorador do Desconhecido", descricao: "Mapeie completamente 10 áreas desconhecidas" }),
  new Conquista({ id: 19, nome: "Amigo dos Robôs", descricao: "Ganhe a lealdade de 5 robôs autônomos" }),
  new Conquista({ id: 20, nome: "Herói dos Fracos", descricao: "Salve 100 vidas indefesas em situações de perigo iminente" })
];


class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado peloa sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();
