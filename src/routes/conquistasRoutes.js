const express = require('express');
const router = express.Router();
const conquistasController = require('../controllers/ConquistasController');

// Rota para criar uma nova conquista (CREATE)
router.post('/', conquistasController.create);

// Rota para listar todas as conquistas (READ)
router.get('/', conquistasController.list);

// Rota para mostrar uma conquista (READ)
router.get('/:id', conquistasController.show);

// Rota para atualizar uma conquista (UPDATE)
router.put('/:id', conquistasController.update);

// Rota para deletar uma conquista (DELETE)
router.delete('/:id', conquistasController.delete);

module.exports = router;
