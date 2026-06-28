"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DUser;
// Função para organizar os dados recebidos;
function DUser(req) {
    class Usuario {
        constructor(id_usuario, nome_usuario, sobre_nome_usuario, email_usuario, senha_usuario, data_nascimento) {
            this.id_usuario = id_usuario;
            this.nome_usuario = nome_usuario;
            this.sobre_nome_usuario = sobre_nome_usuario;
            this.email_usuario = email_usuario;
            this.senha_usuario = senha_usuario;
            this.data_nascimento = data_nascimento;
        }
    }
    // Atribuindo dados do usuario;
    const usuario = new Usuario(req.id_usuario, req.nome_usuario, req.sobre_nome_usuario, req.email_usuario, req.senha_usuario, req.data_nascimento);
    return usuario;
}
//# sourceMappingURL=controller.dados.js.map