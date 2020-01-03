const express = require("express");
const controller = require("../controller/rota");

const router = express.Router();

router.get('/rotas/:id', controller.buscarUm)

router.get('/rotas', controller.buscarTodos)

router.post('/rotas', controller.criar)

router.put('/rotas/:id', controller.atualizar)

router.delete('/rotas/:id', controller.excluir)

module.exports = router;