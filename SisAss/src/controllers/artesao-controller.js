//Importando a model
const mongoose = require('mongoose');
const Artesao = mongoose.model('Artesao');

exports.get = (req, res, next) => {
    Artesao.find()
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

//Rotas
//Rota de criação //Status 201 = Create //Movido na aula 12
exports.post = (req, res, next) => {
    const artesao = Artesao(req.body); //passa o produto como corpo da requição
    artesao
        .save() //Usado para salvar no mongoodb
        .then(x => {
            res.status(201).send({ message: 'Artesão cadastrado com sucesso' });
        }).catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o artesão', data: e });
        });

};

//movido na aula 12
exports.put = (req, res, next) => {
    const id = req.params.id;//recupera os parametros que vem pela url
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.put = (req, res, next) => {
    Artesao
        .findByIdAndUpdate(req.params.id, {
            //$set seta o que veio da requisao
            $set: {
                nome: req.body.nome,
                dataDeNascimento: req.body.dataDeNascimento,
                sexo: req.body.sexo,
                naturalidadeUF: req.body.naturalidadeUF,
                naturalidadeMU: req.body.naturalidadeMU,
                numRG: req.body.numRG,
                cepArtesao: req.body.cepArtesao,
                rua: req.body.rua,
                numeroEnd: req.body.numeroEnd,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                uf: req.body.uf,
                emailArtesao: req.body.emailArtesao,
                celular: req.body.celular,
                telefone: req.body.telefone
            }
        }).then(x => {
            res.status(201).send({
                message: 'Artesao atualizado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar artesao',
                data: e
            });
        });
};


/*//Lista pelo slug aula 18
exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug, //recebe o slug como paramentro
            active: true
        }, 'product slug description materiaPrima peso dimensao segmento preco quantidade')

        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};*/

//Lista pelo ID aula 19
exports.getById = (req, res, next) => {
    Artesao
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

/*//Lista pelo ID aula 20
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'product slug description materiaPrima peso dimensao segmento preco quantidade') //Os campos que estão dentro da string, são os que vão aparecer
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};*/

/*/movido na aula 12
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};*/

/*exports.delete = (req, res, next) => {
    Artesao
    .findOneAndRemove(req.params.id)
    .then(x => {
        res.status(200).send({          
            message: 'Deu certo caralho!!!!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Mas que caralho, velho',
            data: e
        });
    });

};*/
exports.delete = (req, res, next) => {

    const { id } = req.params;
    Artesao
    .deleteOne({
        _id: id
    })
    .then(x => {
        res.status(200).send({          
            message: 'Deu certo caralho!!!!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Mas que caralho, velho',
            data: e
        });
    });

};