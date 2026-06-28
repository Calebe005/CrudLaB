"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Insert_user;
const model_connect_1 = __importDefault(require("./model.connect"));
async function Insert_user(user) {
    try {
        const [result] = await model_connect_1.default.execute("INSERT INTO \`usuario\`(\`nome_usuario\`, \`sobrenome_usuario\`, \`email_usuario\`, \`senha_usuario\`,\`data_nascimento\`)VALUES (?, ?, ?, ?, ?)", [
            user.nome_usuario,
            user.sobre_nome_usuario,
            user.email_usuario,
            user.senha_usuario,
            user.data_nascimento,
        ]);
        return "Usuário criado com sucesso!";
    }
    catch (err) {
        throw new Error("Erro ao inserir cadastro na base de dados:");
    }
}
//# sourceMappingURL=model.inserir.user.js.map