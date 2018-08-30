'use strict';
//Importando a model //aula 16
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Rotas
//Rota de criação //Status 201 = Create //Movido na aula 12
exports.post = (req, res, next) => {
    var product = Product(req.body); //passa o produto como corpo da requição
    product
        .save()
        .then(x => {
            res.status(201).send({message: 'Produto cadastrado com sucesso'});
        }).catch(e => {
            res.status(400).send({message: 'Falha ao cadastrar o produto', data: e});
        });

};

//movido na aula 12
exports.put = (req, res, next) => {
    const id = req.params.id;//recupera os parametros que vem pela url
    res.status(200).send({
        id: id,
        item: req.body
    });
}

//movido na aula 12
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}