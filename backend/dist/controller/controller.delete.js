"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deleteData;
const mode_delete_1 = __importDefault(require("../model/mode.delete"));
async function deleteData(email) {
    const result = await (0, mode_delete_1.default)(email); // Chamando Model de delete:
    // Verificando resposta e retornando
    if (result) {
        return "Usuário deletado!";
    }
    else {
        return "Usuario não encontrado!";
    }
}
//# sourceMappingURL=controller.delete.js.map