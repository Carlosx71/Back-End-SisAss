'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)
// Da uma olhada no fs = require('fs'); isso permite apontar para as paginas html
//Importando pacotes (Elas vem da pasta node_modules)
const express = require('express');
const bodyParser = require('body-Parser'); //Este pacote converte o corpo da requisição para json

const app = express();
const router = express.Router();

//carregar rotas que estão em index
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');

app.use(bodyParser.json()); //converte todo conteudo do corpo(corpo da requisição) pra Json
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;