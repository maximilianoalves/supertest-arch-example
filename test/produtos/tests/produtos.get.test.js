'use strict'
const produtos = require('../requests/produtos.request')
const joi = require('joi')
const produtosSchema = require('../schemas/produtos.schema')
const produtoSchema = require('../schemas/produto.schema')

describe('GET - Produtos', () => {
    it('Deve buscar os produtos com sucesso - @smoke', async () => {
       let res = await produtos.get 
       chai.expect(res.statusCode).to.equal(200)
       chai.assert.isNotEmpty(res.body)
    });

    it('Deve validar o schema json da lista de produtos - @schema', async () => {
        let res = await produtos.get
        joi.assert(res.body, produtosSchema)
    });

    it('Deve buscar um unico produto com sucesso - @integration', async () => {
        let resProdutos = await produtos.get
        let idPrimeiroProduto = resProdutos.body.produtos[0]._id

        let resProdutoById = await produtos.getById(idPrimeiroProduto)
        chai.expect(resProdutoById.statusCode).to.equal(200)
        chai.assert.isNotEmpty(resProdutoById.body)
    });

    it('Deve validar o schema json de um produto - @schema', async () => {
        let resProdutos = await produtos.get
        let idPrimeiroProduto = resProdutos.body.produtos[0]._id

        let resProdutoById = await produtos.getById(idPrimeiroProduto)
        joi.assert(resProdutoById.body, produtoSchema)
    });

});
