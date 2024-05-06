const express = require('express');
const router = express.Router();
const classificacoesController = require('../controllers/classificacoesController');

// Rota para listar os 10 primeiros jogadores ordenados por classificação
router.get('/classificacao', classificacoesController.listaClassificacao);

module.exports = router;
