'use strict';

//Rotas
//Rota de criação //Status 201 = Create //Movido na aula 12
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
}

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