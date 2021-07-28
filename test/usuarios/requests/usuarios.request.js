'use strict';
const global = require('../../../utils/global')
const supertest = require('supertest')
const usuarioPayload = require('../payloads/usuario.payload')

module.exports = {
    get: supertest(global.base.url).get('usuarios').set('Accept', 'application/json'),
    getById: (id) => {
        return supertest(global.base.url).get(`usuarios/${id}`).set('Accept', 'application/json')
    },
    post: (administrador) => {
        return supertest(global.base.url).post('usuarios').send(usuarioPayload.adicionar(administrador)).set('Accept', 'application/json')
    },
    delete: (id) => {
        return supertest(global.base.url).delete(`usuarios/${id}`).set('Accept', 'application/json')
    }
}