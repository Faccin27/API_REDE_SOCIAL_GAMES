const { Router } = require("express");
const router = new Router();

// Importa e utiliza as rotas de jogadores
const jogadoresRoutes = require('./jogadoresRoutes');
router.use('/jogadores', jogadoresRoutes);

// Importa e utiliza as rotas de conquistas
const conquistasRoutes = require('./conquistasRoutes');
router.use('/conquistas', conquistasRoutes);

// Importa e utiliza as rotas de estatisticas
const estatisticasRoutes = require('./estatisticasRoutes');
router.use('/estatisticas', estatisticasRoutes);

const amizadesRoutes = require('./amizadeRoutes');
router.use('/amizades', amizadesRoutes);

const partidasRoutes = require('./partidasRoutes');
router.use('/partidas', partidasRoutes);

const classificacoesRoutes = require('./classificacoesRoutes');
router.use('/classificacoes', classificacoesRoutes);

const mensagensRoutes = require("./mensagemRoutes");
router.use('/mensagens', mensagensRoutes);
module.exports = router;
