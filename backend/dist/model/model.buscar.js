"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscaBD = buscaBD;
const model_connect_1 = __importDefault(require("./model.connect"));
async function buscaBD(data, filter) {
    //* Busca quantidade de cadastros por email:
    if (filter === "BuscaQntEmail") {
        const [rows] = await model_connect_1.default.execute("SELECT count(*) as total FROM \`usuario\` WHERE \`email_usuario\` = ?", [data]);
        const result = rows[0]; // Especificar que o retorno é um array;
        return result.total; // Retorna a quantidade de resultados;
        //* Busca por E-mail
    }
    else if (filter === "Email") {
        const [rows] = await model_connect_1.default.execute("SELECT * FROM \`usuario\` WHERE \`email_usuario\`= ?", [data]);
        // Tratando tipo de resposta e emitindo:
        let result = rows;
        return result;
        //* Busca por Nome:
    }
    else if (filter === "Nome") {
        const [rows] = await model_connect_1.default.execute("SELECT * FROM \`usuario\` WHERE \`nome_usuario\`= ?", [data]);
        // Tratando tipo de resposta e emitindo:
        const result = rows;
        return result;
        //* Busca por sobrenome;
    }
    else if (filter === "Sobrenome") {
        const [rows] = await model_connect_1.default.execute("SELECT * FROM \`usuario\` WHERE \`sobrenome_usuario\`= ?", [data]);
        // Tratando tipo de resposta e emitindo:
        const result = rows;
        return result;
        //* Busca por data de nascimento:
    }
    else if (filter === "DtNascimento") {
        const [rows] = await model_connect_1.default.execute("SELECT * FROM \`usuario\` WHERE \`data_nascimento\`= ?", [data]);
        // Tratando tipo de resposta e emitindo:
        const result = rows;
        return result;
    }
    else {
        return "Tipo de pesquisa inválido!";
    }
}
//# sourceMappingURL=model.buscar.js.map