const faker = require("faker")

module.exports = {
  adicionar: (administrador) => {
    return {
      "nome": faker.name.findName(),
      "email": faker.internet.email(),
      "password": "teste",
      "administrador": administrador
    }
  }
}