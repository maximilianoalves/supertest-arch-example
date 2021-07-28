const Joi = require('joi')

const usuarioSchema = Joi.object({
    nome: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    administrador: Joi.string(),
    _id: Joi.string()
})
module.exports = usuarioSchema