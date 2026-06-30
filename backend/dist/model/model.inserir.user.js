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
            user.nome_usuario ?? null,
            user.sobrenome_usuario ?? null,
            user.email_usuario ?? null,
            user.senha_usuario ?? null,
            user.data_nascimento ?? null,
        ]);
        return "Cadastro Efetuado!";
    }
    catch (err) {
        console.error(err);
        throw new Error("Erro ao inserir cadastro na base de dados:");
    }
}
//# sourceMappingURL=model.inserir.user.js.map