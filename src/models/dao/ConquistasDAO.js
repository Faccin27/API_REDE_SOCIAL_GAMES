const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  // Altere aqui para as suas conquistas
  new Conquista({ id: 1, nome: "Qualquer meio", descricao: "Elimine 3 inimigos com um único uso da Aniquilação de Ramattra" }),
  new Conquista({ id: 2, nome: "Dor Incomparável", descricao: "Bloqueio 300 danifique e sobreviva em um único uso da Forma Nêmesis de Ramattra" }),
  new Conquista({ id: 3, nome: "Adrenaline Junkie", descricao: "Tenha 7 das feridas da Junker Queen ativas nos inimigos ao mesmo tempo em Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 4, nome: "Coup De Gracie", descricao: "Use a lâmina irregular e carnificina de Junker Queen para puxar e matar um inimigo em Quick ou Compet Jogo ativo" }),
  new Conquista({ id: 5, nome: "On the Move", descricao: "Mate um inimigo com um tiro na cabeça do Railgun carregado enquanto desliza no Jogo Rápido ou Competitivo" })
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
