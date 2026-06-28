"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPass = hashPass;
exports.comparePass = comparePass;
const bcrypt_1 = __importDefault(require("bcrypt"));
// Retornar hash de senha:
async function hashPass(password) {
    const saltRounds = Number(process.env.salt); // Saltos para o hash da senha;
    // Hash de senha:
    const hash = await bcrypt_1.default.hash(password, saltRounds);
    return hash; // Retornando o hash da senha.
}
// Comparar senha:
async function comparePass(password, BDPass) {
    const result = await bcrypt_1.default.compare(password, BDPass);
    return result;
}
//# sourceMappingURL=service.bcrypt.js.map