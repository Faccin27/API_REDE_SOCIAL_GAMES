const express = require('express');
const router = express.Router();
const mensagemController = require('../controllers/MensagensController');

// Rota para criar um novoa mensagem (CREATE)
router.post('/', mensagemController.create);

// Rota para listar todos os mensagem (READ)
router.get('/', mensagemController.list);

// Rota para mostrar uma mensagem (READ)
router.get('/:id', mensagemController.show);

// Rota para atualizar uma mensagem (UPDATE)
router.put('/:id', mensagemController.update);

// Rota para deletar uma mensagem (DELETE)
router.delete('/:id', mensagemController.delete);

module.exports = router;
