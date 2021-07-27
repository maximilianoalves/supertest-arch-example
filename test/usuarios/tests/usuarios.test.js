'use strict';
const usuarios = require('../requests/usuarios.request')
const joi = require('joi');
const usuariosSchema = require('../contracts/usuarios.contract');

describe('GET - Usuarios', () => {
    it('Deve buscar os usuários com sucesso', async () => {
        usuarios.get.expect(200).then(res => {
            chai.assert.isNotEmpty(res.body)
        })
    });


    it('Deve validar o contrato da lista de usuários', async () => {
        let res = await usuarios.get
        joi.assert(res.body, usuariosSchema)
    });
});