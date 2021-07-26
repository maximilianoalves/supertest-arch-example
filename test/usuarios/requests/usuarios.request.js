'use strict';
const global = require('../../../utils/global')
const supertest = require('supertest')

const listar = {
    get: supertest(global.base.url).get('usuarios').set('Accept', 'application/json')
}

module.exports = {
    listar
}