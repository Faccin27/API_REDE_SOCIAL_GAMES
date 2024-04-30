const express = require('express');
const router = express.Router();
const classificacoesController = require('../controllers/classificacoesController');


// Rota para listar todos os classificacao (READ)
router.get('/', ClassificacoesController.list);


module.exports = router;
