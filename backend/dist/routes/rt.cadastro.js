"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_org_dados_1 = require("../controller/controller.org.dados"); // Organizador de dados
const routes = (0, express_1.Router)();
routes.post("/", async (req, res, next) => {
    try {
        const menssagem = await (0, controller_org_dados_1.DUser)(req.body); // Chamando controller de dados;
        res.status(201).json(menssagem);
        console.log(menssagem);
    }
    catch (err) {
        next(err); // Passa todos os erros para o Middleware de erros
    }
});
exports.default = routes;
//# sourceMappingURL=rt.cadastro.js.map