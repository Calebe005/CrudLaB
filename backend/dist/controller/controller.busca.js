"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pesquisaData;
const errors_validadition_1 = __importDefault(require("../Errors/errors.validadition"));
const model_buscar_1 = require("../model/model.buscar");
async function pesquisaData(data) {
    let result = await (0, model_buscar_1.buscaBD)(data.search.toUpperCase(), data.reqType);
    // Verificando se houve retorno.
    if (String(result) == "") {
        throw new errors_validadition_1.default([`${data.reqType} não encontrado!`]); // Usuário não encontrado!
    }
    else {
        return result; // Retorna os resultados
    }
}
//# sourceMappingURL=controller.busca.js.map