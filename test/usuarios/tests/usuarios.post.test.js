'use strict';
const usuarios = require('../requests/usuarios.request')

describe('POST - Usuarios', () => {
    it('Deve adicionar um usuário não administrador com sucesso', async () => {
        let res = await usuarios.post("false")
        chai.expect(res.statusCode).to.equal(201)
        chai.expect(res.body.message).to.equal('Cadastro realizado com sucesso')
    });
});