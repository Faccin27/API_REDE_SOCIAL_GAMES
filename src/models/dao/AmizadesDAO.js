const Amizade = require("../amizade");

// Vetor de Amizades
let amizades = [
  new Amizade({ id: 1, amigos: [1, 5] }),
  new Amizade({ id: 2, amigos: [3, 4] }),
  new Amizade({ id: 3, amigos: [2, 5] }),
  new Amizade({ id: 4, amigos: [1, 3] }),
  new Amizade({ id: 5, amigos: [4, 1] }),
  new Amizade({ id: 6, amigos: [2, 5] }),
  new Amizade({ id: 7, amigos: [3, 6] }),
  new Amizade({ id: 8, amigos: [1, 7] }),
  new Amizade({ id: 9, amigos: [4, 8] }),
  new Amizade({ id: 10, amigos: [2, 9] }),
  new Amizade({ id: 11, amigos: [1, 10] }),
  new Amizade({ id: 12, amigos: [3, 11] }),
  new Amizade({ id: 13, amigos: [4, 12] }),
  new Amizade({ id: 14, amigos: [5, 13] }),
  new Amizade({ id: 15, amigos: [1, 14] }),
  new Amizade({ id: 16, amigos: [2, 15] }),
  new Amizade({ id: 17, amigos: [3, 16] }),
  new Amizade({ id: 18, amigos: [4, 17] }),
  new Amizade({ id: 19, amigos: [5, 18] }),
  new Amizade({ id: 20, amigos: [1, 19] })
];

class AmizadesDAO {
  // Retorna a lista de amizades
  listar() {
    return amizades;
  }

  // Retorna uma amizade filtrada pelo seu ID
  buscarPorId(id) {
    return amizades.find(amizade => amizade.id === id);
  }

  // Verifica se existe uma instância de amizade com aquele ID
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena uma nova amizade
  criar(amizade) {
    amizade.id = amizades.length > 0 ? amizades[amizades.length - 1].id + 1 : 1;
    amizades.push(amizade);
    return amizade.id;
  }

  // Atualiza uma amizade
  atualizar(id, amizadeAtualizada) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades[index] = amizadeAtualizada;
    }
  }

  // Deleta uma amizade
  deletar(id) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades.splice(index, 1);
    }
  }

  // Lista os amigos de um jogador pelo ID
  listarAmigosPorIdJogador(idJogador) {
    let amigos = [];
    amizades.forEach(amizade => {
      amigos = amigos.concat(amizade.filtrarAmigosPorId(idJogador));
    });
    return amigos;
  }
}

module.exports = new AmizadesDAO();
