const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/PartidasController');

// Rota para criar um novoa partida (CREATE)
router.post('/', partidaController.create);

// Rota para listar todos os partida (READ)
router.get('/', partidaController.list);

// Rota para mostrar uma partida (READ)
router.get('/:id', partidaController.show);

// Rota para atualizar uma partida (UPDATE)
router.put('/:id', partidaController.update);

// Rota para deletar uma partida (DELETE)
router.delete('/:id', partidaController.delete);

module.exports = router;
