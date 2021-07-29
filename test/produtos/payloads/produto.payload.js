const faker = require("faker")

module.exports = {
  adicionar: () => {
    return {
      "nome": faker.commerce.productName(),
      "preco": 470,
      "descricao": "Descrição teste",
      "quantidade": "10"
    }
  }
}