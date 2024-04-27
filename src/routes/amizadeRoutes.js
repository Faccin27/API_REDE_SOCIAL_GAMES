const express = require('express');
const router = express.Router();
const amizadesController = require('../controllers/AmizadesController');

// Rota para criar um novo amigo (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todos os amizades (READ)
router.get('/', amizadesController.list);

// Rota para mostrar um amigo (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar um amigo (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar um amigo (DELETE)
router.delete('/:id', amizadesController.delete);

module.exports = router;
