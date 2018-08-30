'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//aula 15 como fazer as models

//Este é o corpo da model
const schema = new Schema({
    //mongo faz ID automaticamente
    title: {
        type: String,
        required: true, // É requerida
        trim: true //não permite espaços
    },
    slug: { // O slug faz ficar desta maneira exemplo "cadeira gamer" = cadeira-gamer
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true, // precisa de um indice por que precisa fazer uma busca por ele.
        unique: true //precisa ser único
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{ // tags é um array
        type: String,
        required: true
    }]
});

//Exportando o schema aula 15
module.exports = mongoose.model('Product', schema);