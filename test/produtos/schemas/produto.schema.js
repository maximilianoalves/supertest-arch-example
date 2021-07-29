const Joi = require('joi')

const produtoSchema = Joi.object({
    nome: Joi.string(),
    preco: Joi.number(),
    descricao: Joi.string(),
    quantidade: Joi.number(),
    _id: Joi.string(),
})
module.exports = produtoSchema