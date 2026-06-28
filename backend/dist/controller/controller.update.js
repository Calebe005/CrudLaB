"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = upDate;
const model_buscar_1 = require("../model/model.buscar");
const model_update_1 = __importDefault(require("../model/model.update"));
const controller_filter_dados_1 = __importDefault(require("./controller.filter.dados"));
async function upDate(data) {
    // Chamar controller de busca para obter usuário:
    let result = await (0, model_buscar_1.buscaBD)(data.search, "Email");
    result = await JSON.parse(JSON.stringify(result, null, 2));
    result = result[0].id_usuario; // Passando apenas o id;
    let keyUpDate = Object.keys(data.update); // Retirando keys da solicitação de update;
    // Tornando as modificações maiúsculas;
    data.update = Object.fromEntries(Object.entries(data.update).map(([chave, valor]) => [
        chave,
        typeof valor === "string" && chave != "senha_usuario" ? valor.toUpperCase() : valor
    ]));
    // Fazer filtragem de dados se houver:
    const status = await (0, controller_filter_dados_1.default)(data.update, "Update");
    let hash; // hash da senha se houver
    if (keyUpDate.includes("senha_usuario")) {
        hash = status;
    }
    // Chamar Model para update de dados:
    const update = await (0, model_update_1.default)(result, keyUpDate, data.update, hash);
    return update;
}
//# sourceMappingURL=controller.update.js.map