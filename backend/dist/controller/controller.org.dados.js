"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DUser = DUser;
const controller_filter_dados_1 = __importDefault(require("./controller.filter.dados"));
// Função para organizar os dados recebidos;
async function DUser(req) {
    // Classe de objetos de usuarios:
    class Usuario {
        constructor(dados) {
            Object.assign(this, dados);
        }
    }
    // Atribuindo dados do usuario para cadastro;
    let dataUser = new Usuario(req);
    // Tornando dados string UpperCase exceto a senha:
    dataUser = Object.fromEntries(Object.entries(dataUser).map(([chave, valor]) => [
        chave,
        typeof valor === "string" && chave != "senha_usuario" ? valor.toUpperCase() : valor
    ]));
    return await (0, controller_filter_dados_1.default)(dataUser, "Cadastro"); // Controller para Filtragem dos dados;
}
//# sourceMappingURL=controller.org.dados.js.map