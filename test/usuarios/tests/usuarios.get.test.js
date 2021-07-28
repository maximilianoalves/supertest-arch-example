'use strict';
const usuarios = require('../requests/usuarios.request')
const joi = require('joi');
const usuariosSchema = require('../schemas/usuarios.schema');
const usuarioSchema = require('../schemas/usuario.schema');

describe('GET - Usuarios', () => {
    it('Deve buscar os usuários com sucesso - @smoke', async () => {
        usuarios.get.expect(200).then(res => {
            chai.assert.isNotEmpty(res.body)
        })
    });

    it('Deve validar o schema json da lista de usuários - @schema', async () => {
        let res = await usuarios.get
        joi.assert(res.body, usuariosSchema)
    });

    it('Deve buscar um usuário por id com sucesso - @integration', async () => {
        let resUsuarios = await usuarios.get
        let idPrimeiroUsuario = resUsuarios.body.usuarios[0]._id
        
        let resUsuariosById = await usuarios.getById(idPrimeiroUsuario)

        chai.expect(resUsuariosById.statusCode).to.equal(200)
        chai.assert.isNotEmpty(resUsuariosById.body)
    });

    it('Deve validar o schema json de um usuário por id com sucesso - @schema', async () => {
        let resUsuarios = await usuarios.get
        let idPrimeiroUsuario = resUsuarios.body.usuarios[0]._id
        
        let resUsuariosById = await usuarios.getById(idPrimeiroUsuario)

        joi.assert(resUsuariosById.body, usuarioSchema)
    });
});