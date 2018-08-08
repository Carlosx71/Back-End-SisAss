'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)

//Importando pacotes (Elas vem da pasta node_modules)
const express = require('express');
const bodyParser = require('body-Parser'); //Este pacote converte o corpo da requisição para json

const app = express();
const router = express.Router();


app.use(bodyParser.json()); //converte todo conteudo do corpo pra Json
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL

//Rotas
//Rota de leitura //Status 200 = OK //Aula 10
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

//Rota de criação //Status 201 = Create
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

//Rota de criação //Status 201 = Create
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;//recupera os parametros que vem pela url
    res.status(201).send({
        id: id, 
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', route);
app.use('/products', create);
app.use('/product', put);
app.use('/product', del);

module.exports = app;