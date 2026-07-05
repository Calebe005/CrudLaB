"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = upDate;
const model_buscar_1 = require("../model/model.buscar");
const model_update_1 = __importDefault(require("../model/model.update"));
const controller_filter_dados_1 = __importDefault(require("./controller.filter.dados"));
const errors_validadition_1 = __importDefault(require("../Errors/errors.validadition"));
async function upDate(data) {
    // Chamar controller de busca para obter usuário:
    let result = await (0, model_buscar_1.buscaBD)(data.search, "Email");
    if (result == "") {
        throw new errors_validadition_1.default(["E-mail não encontrado!"]);
    }
    result = await JSON.parse(JSON.stringify(result, null, 2));
    result = result[0].id_usuario; // Passando apenas o id;
    let keyUpDate = Object.keys(JSON.parse(data.update)); // Retirando keys da solicitação de update;
    // Tornando as modificações maiúsculas;
    let updateObj = Object.fromEntries(Object.entries(JSON.parse(data.update)).map(([chave, valor]) => [
        chave,
        typeof valor === "string" && chave != "senha_usuario"
            ? valor.toUpperCase()
            : valor,
    ]));
    console.log(updateObj);
    // Fazer filtragem de dados se houver:
    const status = await (0, controller_filter_dados_1.default)(updateObj, "Update");
    let hash; // hash da senha se houver
    if (keyUpDate.includes("senha_usuario")) {
        hash = status;
    }
    // Chamar Model para update de dados:
    const update = await (0, model_update_1.default)(result, keyUpDate, updateObj, hash);
    return update;
}
//# sourceMappingURL=controller.update.js.map