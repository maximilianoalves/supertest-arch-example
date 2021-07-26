'use strict';
const usuarios = require('../requests/usuarios.request')
const joi = require('joi');
const usuariosSchema = require('../contracts/usuarios.contract');

describe('GET - Usuarios', () => {
    it('Deve buscar os usuários com sucesso', async () => {
        usuarios.listar.get.expect(200).then(res => {
            chai.assert.isNotEmpty(res.body)
        })
    });


    it('Deve validar o contrato da lista de usuários', async () => {
        let res = await usuarios.listar.get

        joi.assert(res.body, usuariosSchema)
    });
});