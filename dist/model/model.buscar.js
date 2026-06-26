"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscaQntEmail = buscaQntEmail;
const model_connect_1 = __importDefault(require("./model.connect"));
async function buscaQntEmail(email) {
    const [rows] = await model_connect_1.default.execute("SELECT count(*) as total FROM \`usuario\` WHERE \`email_usuario\` = ?", [email]);
    const result = rows[0]; // Especificar que o retorno é um array;
    return result.total; // Retorna a quantidade de resultados;
}
//# sourceMappingURL=model.buscar.js.map