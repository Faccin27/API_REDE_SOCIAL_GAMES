const express = require('express');
const router = express.Router();
const estatisticasController = require('../controllers/EstatisticasController');

// Rota para criar uma nova estatistica (CREATE)
router.post('/', estatisticasController.create);

// Rota para listar todas as estatisticas (READ)
router.get('/', estatisticasController.list);

// Rota para mostrar uma estatistica (READ)
router.get('/:id', estatisticasController.show);

// Rota para atualizar uma estatistica (UPDATE)
router.put('/:id', estatisticasController.update);

// Rota para deletar uma estatistica (DELETE)
router.delete('/:id', estatisticasController.delete);

module.exports = router;
