"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_org_dados_1 = __importDefault(require("../controller/controller.org.dados")); // Organizador de dados
const routes = (0, express_1.Router)();
routes.post("/", async (req, res, next) => {
    try {
        const usuario = await (0, controller_org_dados_1.default)(req.body); // Chamando controller de dados;
        res.status(201).send(usuario);
    }
    catch (err) {
        next(err); // Passa todos os erros para o Middleware de erros
    }
});
exports.default = routes;
//# sourceMappingURL=rt.cadastro.js.map