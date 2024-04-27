const express = require('express');
const router = express.Router();
const jogadoresController = require('../controllers/JogadoresController');

// Rota para criar um novo jogador (CREATE)
router.post('/', jogadoresController.create);

// Rota para listar todos os jogadores (READ)
router.get('/', jogadoresController.list);

// Rota para mostrar um jogador (READ)
router.get('/:id', jogadoresController.show);

// Rota para atualizar um jogador (UPDATE)
router.put('/:id', jogadoresController.update);

// Rota para deletar um jogador (DELETE)
router.delete('/:id', jogadoresController.delete);

module.exports = router;
