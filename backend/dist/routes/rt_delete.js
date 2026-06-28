"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_delete_1 = __importDefault(require("../controller/controller.delete"));
const routes = (0, express_1.Router)();
routes.delete("/", async (req, res, next) => {
    try {
        const msg = await (0, controller_delete_1.default)(req.body.email_usuario); // Controller de Delete
        res.status(200).send(msg);
        console.log(msg);
    }
    catch (err) {
        next(err); // Chamando Middleware de erros
    }
});
exports.default = routes;
//# sourceMappingURL=rt_delete.js.map