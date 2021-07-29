'use strict'
const produtos = require('../requests/produtos.request')
const login = require('../../login/requests/login.request')
const loginPayload = require('../../login/payloads/login.payload')

describe('POST - Produtos', () => {
    it('Deve adicionar um produto com sucesso - @integration', async () => {
        let resUsuarioLogado = await login.post(loginPayload.loginValido).expect(200)
        let idUsuarioLogado = resUsuarioLogado.body.authorization
        let res = await produtos.post(idUsuarioLogado)
        chai.expect(res.statusCode).to.equal(201)
        chai.expect(res.body.message).to.equal('Cadastro realizado com sucesso')
    });
    
    it('Deve adicionar um produto token ausente - @integration', async () => {
        let res = await produtos.post('')
        chai.expect(res.statusCode).to.equal(401)
        chai.expect(res.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
    });
});