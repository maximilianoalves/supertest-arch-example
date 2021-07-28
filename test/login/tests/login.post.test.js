'use strict';
const login = require('../requests/login.request')
const loginPayload = require('../payloads/login.payload')

describe('POST - Login', () => {
    it('Deve realizar o login com sucesso - @integration', async () => {
        let res = await login.post(loginPayload.loginValido)
        chai.expect(res.statusCode).to.equal(200)
        chai.expect(res.body.message).to.equal('Login realizado com sucesso')
    });

    it('Deve realizar o login com email inválido - @integration', async () => {
        let res = await login.post(loginPayload.loginEmailInvalido)
        chai.expect(res.statusCode).to.equal(400)
        chai.expect(res.body.email).to.equal('email deve ser um email válido')
    });

    it('Deve realizar o login com password inválido - @integration', async () => {
        let res = await login.post(loginPayload.loginPasswordInvalido)
        chai.expect(res.statusCode).to.equal(401)
        chai.expect(res.body.message).to.equal('Email e/ou senha inválidos')
    });
});