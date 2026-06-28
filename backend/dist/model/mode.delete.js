"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = daleteModel;
const model_connect_1 = __importDefault(require("./model.connect"));
async function daleteModel(email) {
    const [result] = await model_connect_1.default.execute("DELETE FROM \`usuario\` WHERE \`email_usuario\` = ?", [email]);
    return result.affectedRows; // Retornando se houve alterações.
}
//# sourceMappingURL=mode.delete.js.map