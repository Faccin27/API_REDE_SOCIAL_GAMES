// models/dao/amizadesDAO.js
const Amizade = require("../amizade");

// Vetor de Amizades
let amizades = [
  // Altere aqui para suas amizades
  new Amizade({ id: 1, amigos: [1, 2] }),
  new Amizade({ id: 2, amigos: [3, 4] }),
  new Amizade({ id: 3, amigos: [2, 5] }),
  new Amizade({ id: 4, amigos: [1, 3] }),
  new Amizade({ id: 5, amigos: [4, 1] }),
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
}

module.exports = new AmizadesDAO();
