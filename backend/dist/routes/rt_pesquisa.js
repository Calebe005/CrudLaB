"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_busca_1 = __importDefault(require("../controller/controller.busca"));
const routes = (0, express_1.Router)();
routes.get("/", async (req, res, next) => {
    try {
        let result = await (0, controller_busca_1.default)(req.body); // Controller de pesquisa;
        res.status(200).json(result);
    }
    catch (err) {
        next(err); // Chama middleware de errors
    }
});
exports.default = routes;
//# sourceMappingURL=rt_pesquisa.js.map