"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pesquisaData;
const model_buscar_1 = require("../model/model.buscar");
async function pesquisaData(data) {
    let result = await (0, model_buscar_1.buscaBD)(data.search.toUpperCase(), data.reqType);
    // Verificando se houve retorno.
    if (String(result) == "") {
        return `${data.reqType} não encontrado!`; // Usuário não encontrado!
    }
    else {
        return result; // Retorna os resultados
    }
}
//# sourceMappingURL=controller.busca.js.map