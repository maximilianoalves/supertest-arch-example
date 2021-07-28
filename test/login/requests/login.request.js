'use strict';
const global = require('../../../utils/global')
const supertest = require('supertest')

module.exports = {
    post: (payload) => {
        return supertest(global.base.url).post('login').send(payload).set('Accept', 'application/json')
    }
}