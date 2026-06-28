"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = updateBD;
const model_connect_1 = __importDefault(require("./model.connect"));
async function updateBD(data, keyUpDate, upData, hash) {
    const dados = Object.values(upData); // Dados para update
    let qntUpDate = []; // Quantidade de Updates;
    let vUpdates = []; // Valores para update;
    // Verificando quantidade de updates.
    dados.forEach((data, i) => {
        qntUpDate.push("\`" + keyUpDate[i] + "\`" + "= ? ");
        if (keyUpDate[i] == "senha_usuario") {
            vUpdates.push(hash);
        }
        else {
            vUpdates.push(data);
        }
    });
    // Trasnformando em string para sql
    const setClausule = qntUpDate.join(",");
    // Atualizando dados;
    const [result] = await model_connect_1.default.execute(`UPDATE \`usuario\` SET ${setClausule} WHERE \`id_usuario\` = ${data}`, vUpdates);
    return "Usuário atualizado!";
}
//# sourceMappingURL=model.update.js.map