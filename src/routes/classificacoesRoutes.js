const express = require('express');
const JogadoresController = require('../controllers/JogadoresController');
const router = express.Router();

router.get('/', JogadoresController.listarTopJogadores)

module.exports = router;
