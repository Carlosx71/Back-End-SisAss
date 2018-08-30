'use strict';
//Importando a model //aula 16
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Lista Produtos aula 17
exports.get = (req, res, next) => {
    Product.find({ //funciona como se fosse um select, exemplo: Product.find({product:"Panela de Pedra Sabao", description:"Feita de pedra e sabao"}); sem nada busca TUDO
        active:true
    }, 'product slug description materiaPrima peso dimensao segmento preco quantidade' ) 
    
    .then(data => {
        res.status(200).send(data); //retorna o json
    }).catch(e => {
        res.status(400).send(e);
    });
};

//Rotas
//Rota de criação //Status 201 = Create //Movido na aula 12
exports.post = (req, res, next) => {
    var product = Product(req.body); //passa o produto como corpo da requição
    product
        .save() //Usado para salvar no mongoodb
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