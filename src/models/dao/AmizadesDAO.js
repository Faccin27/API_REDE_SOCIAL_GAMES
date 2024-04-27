// models/dao/amizadesDAO.js
const Amizade = require("../amizade");

// Vetor de Amizades
let amizades = [
  // Altere aqui para suas amizades
  new Amizade({ id: 1, nome: "Cleber mata gado"}),
  new Amizade({ id: 2, nome: "Xaulin matador de porco"}),
  new Amizade({ id: 3, nome: "Armando Pinto" }),
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
