//Criado na aula 11
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/',controller.post);
router.put('/:id',controller.put);
router.delete('/',controller.delete);
router.get('/',controller.get); //get em products aula 17
module.exports = router;