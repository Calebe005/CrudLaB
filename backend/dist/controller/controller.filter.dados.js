"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilterData;
const errors_validadition_1 = __importDefault(require("../Errors/errors.validadition")); // Classe de erros personalizada
const model_buscar_1 = require("../model/model.buscar");
const model_inserir_user_1 = __importDefault(require("../model/model.inserir.user"));
const service_bcrypt_1 = require("../services/service.bcrypt");
async function FilterData(user, reqType) {
    let erros = []; // Array de erros encontrados
    let regex; // Armazena exigencias de filtragens.
    // Verificação de nome e sobrenome:
    regex = /\d/; // Teste se possui número
    if (user.nome_usuario && user.sobrenome_usuario) {
        if (user.nome_usuario.length > 20 || user.sobrenome_usuario.length > 20) {
            erros.push("Nome ou sobre nome inválido!");
        }
        if (regex.test(user.nome_usuario) || regex.test(user.sobrenome_usuario)) {
            erros.push("Nome e sobrenome não podem conter números");
        }
    }
    else if (!user.nome_usuario && !user.sobrenome_usuario && reqType == "Cadastro") {
        erros.push("Nome e sobrenome são campos obrigatórios!");
    }
    //! Verificação de email:  
    if (user.email_usuario) {
        // Emails validos:
        let ValidEmail = ["@GMAIL", "@HOTMAIL", "@YAHOO"];
        // Verifica se o e-mail possui um e somente um dos emails validos.
        if (!ValidEmail.some(c => user.email_usuario.includes(c)) || user.email_usuario.split("@").length != 2) {
            erros.push("Email Inválido!");
        }
        if (user.email_usuario.length > 30) {
            erros.push("Email Muito longo!");
        }
        // Verficar se o e-mail já foi cadastrado:
        if (Number(await (0, model_buscar_1.buscaBD)(user.email_usuario, "BuscaQntEmail")) >= 1) {
            erros.push("E-mail já cadastrado!");
        }
    }
    //! Verificação de Senha:
    if (user.senha_usuario) {
        if (user.senha_usuario.length > 20) {
            erros.push("Senha muito longa!");
        }
        // Exige 1 maiusculo, 1 numero e 1 caractere especial:
        regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
        if (!regex.test(user.senha_usuario)) {
            erros.push("Sua senha deve conter pelo menos 1 número, 1 letra maiúscula e 1 caractere especial!");
        }
    }
    //! Verificação de data de nascimento:
    if (user.data_nascimento) {
        let dados_nascimento = user.data_nascimento.split("-");
        let dt_nascimento = dados_nascimento.map(e => Number(e)); // Data em número;
        if (dt_nascimento[0] > 2026) {
            erros.push("O ano de nascimento é maior que o ano atual!");
        }
        if (dt_nascimento[1] > 12 || dt_nascimento[1] < 1) {
            erros.push("Mês inválido!");
        }
        if (dt_nascimento[2] > 31 || dt_nascimento[2] < 1) {
            erros.push("Dia inválido!");
        }
    }
    // Verificando se houve erros e emitindo erro:
    if (erros.length > 0) {
        throw new errors_validadition_1.default(erros);
    }
    else {
        // Se houver senha faz o hash:
        if (user.senha_usuario) {
            user.senha_usuario = await (0, service_bcrypt_1.hashPass)(user.senha_usuario);
        }
    }
    // Verificando qual o tipo de requisição:
    if (reqType == "Cadastro") {
        return await (0, model_inserir_user_1.default)(user);
    }
    if (reqType == "Update") {
        if (user.senha_usuario) {
            return user.senha_usuario;
        }
        else {
            return 1;
        }
    }
}
//# sourceMappingURL=controller.filter.dados.js.map