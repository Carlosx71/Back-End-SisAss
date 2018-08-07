'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)

//Importando pacotes (Elas vem da pasta node_modules)

//configurando a porta do servidor
const express = require('express');

const app = express();
const router = express.Router();

//Rotas
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

module.exports = app;