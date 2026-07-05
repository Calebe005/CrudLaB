"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loginUser;
const controller_busca_1 = __importDefault(require("./controller.busca"));
const service_bcrypt_1 = require("../services/service.bcrypt");
const errors_validadition_1 = __importDefault(require("../Errors/errors.validadition"));
async function loginUser(data) {
    // Extraindo objeto de dados:
    let dataReq = await (0, controller_busca_1.default)({
        reqType: "Email",
        search: data.email_usuario.toUpperCase(),
    });
    dataReq = dataReq;
    let dataBD = await JSON.parse(JSON.stringify(dataReq, null, 2));
    if (!dataBD) {
        throw new Error("E-mail ou Senha incorretos!");
    }
    // Dados encontrados no banco:
    let senhaBD = dataBD[0].senha_usuario; // Senha
    // Verificando senha:
    const hash = await (0, service_bcrypt_1.comparePass)(data.senha_usuario, senhaBD); // service bcrypt;
    // Se o login for bem efetuado:
    if (hash) {
        return "Login efetuado!";
    }
    throw new errors_validadition_1.default(["Senha incorreta!"]);
}
//# sourceMappingURL=controller.login.js.map