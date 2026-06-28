"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loginUser;
const controller_busca_1 = __importDefault(require("./controller.busca"));
const service_bcrypt_1 = require("../services/service.bcrypt");
async function loginUser(data) {
    // Extraindo objeto de dados:
    let dataReq = await (0, controller_busca_1.default)({ reqType: "Email", search: data.email_usuario });
    dataReq = dataReq;
    let dataBD = JSON.parse(JSON.stringify(dataReq, null, 2));
    // Dados encontrados no banco:
    let emailBD = dataBD[0].email_usuario; // Email
    let senhaBD = dataBD[0].senha_usuario; // Senha
    // Verificando senha:
    const hash = await (0, service_bcrypt_1.comparePass)(data.senha_usuario, senhaBD);
    console.log(hash);
    if (!hash) {
        return "Senha incorreta!";
    }
    return "login efetuado!";
}
//# sourceMappingURL=controller.login.js.map