const chai = require('chai')
const productionEnv = require('../env/production.env.json')

function getBaseUrl() {
    switch(process.env.NODE_ENV) {
        case "production":
            console.log(`Iniciado os testes para o ambiente ${productionEnv.url}`);
            return productionEnv.url
        default:
            chai.assert.fail("Ambiente não implementado.")
    }
}

global.chai = chai

const base = {
    url: getBaseUrl()
}

module.exports = {
    base
}