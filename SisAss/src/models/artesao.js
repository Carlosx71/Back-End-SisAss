'use strict';
const mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const teste = mongoose.Schema({})
const schema = new Schema({
    nome:{
        type: String,
        required: true
    },
    dataDeNascimento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    naturalidadeUF: {
        type: String,
        required: true
    },
    naturalidadeMU: {
        type: String,
        required: true
    },
    numRG: {
        type: Number,
        required: true
    },   
    imgArtesao: {
        type: String,
        required: true
    },
    cepArtesao: {
        type: Number,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numeroEnd: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type:String,
        required: true
    },
    emailArtesao: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }

});
schema.plugin(mongoosePaginate);
const Model = mongoose.model('Model',  schema)
//Exportando o schema de artesão
module.exports = mongoose.model('Artesao', schema);