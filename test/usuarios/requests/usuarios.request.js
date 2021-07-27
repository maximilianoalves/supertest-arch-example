'use strict';
const global = require('../../../utils/global')
const supertest = require('supertest')

module.exports = {
    get: supertest(global.base.url).get('usuarios').set('Accept', 'application/json')
}