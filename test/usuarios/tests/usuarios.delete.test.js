'use strict';
const usuarios = require('../requests/usuarios.request')

describe('DELETE - Usuarios', () => {
    it('Deve deletar um usuário com sucesso - @smoke @integration', async () => {
        let resAdicionarUsuario = await usuarios.post("false").expect(201)

        let resDeletarUsuarios = await usuarios.delete(resAdicionarUsuario.body._id)
        chai.expect(resDeletarUsuarios.statusCode).to.equal(200)
        chai.expect(resDeletarUsuarios.body.message).to.equal('Registro excluído com sucesso')
    });

    it('Deve deletar um usuário com id inexistente - @smoke @integration', async () => {
        let resDeletarUsuarios = await usuarios.delete("idquenaoexiste")
        chai.expect(resDeletarUsuarios.statusCode).to.equal(200)
        chai.expect(resDeletarUsuarios.body.message).to.equal('Nenhum registro excluído')
    });

});