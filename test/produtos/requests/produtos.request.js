'use strict';
const global = require('../../../utils/global')
const supertest = require('supertest')
const produtosPayload = require('../payloads/produto.payload')

module.exports = {
    get: supertest(global.base.url).get('produtos').set('Accept', 'application/json'),
    getById: (id) => {
        return supertest(global.base.url).get(`produtos/${id}`).set('Accept', 'application/json')
    },
    post: (authorization) => {
        return supertest(global.base.url).post('produtos').send(produtosPayload.adicionar()).set('Accept', 'application/json').set('Authorization', authorization)
    }
} 