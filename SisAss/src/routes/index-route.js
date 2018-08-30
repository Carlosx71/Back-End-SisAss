//Movendo rotas na aula 11
'use strict';

const express = require('express');
const router = express.Router();

//Rota de leitura //Status 200 = OK //Aula 10
router.get('/', (req, res, next) => {
    res.status(200).send({ title: "SisAss", version: "0.0.1", description: "Vocês são tudo gays" })
});

module.exports = router;