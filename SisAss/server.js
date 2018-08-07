'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)

//Importando pacotes (Elas vem da pasta node_modules)
const http = require('http');
//const debug = require('debug')('SisAss:server'); //olha aula 3 qualquer coisa
const express = require('express');

//configurando a porta do servidor
const app = express();
const port = 3000;
app.set('port', port);

//Instânciando o servidor
const server = http.createServer(app);
const router = express.Router();

//Rotas
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port); //aonde aponta e fica ouvindo a porta que definimos
console.log('Ta funcionando carai!!!!! '+ port);