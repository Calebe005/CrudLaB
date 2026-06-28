"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_update_1 = __importDefault(require("../controller/controller.update"));
const routes = (0, express_1.Router)();
routes.patch("/", async (req, res, next) => {
    try {
        const msg = await (0, controller_update_1.default)(req.body);
        res.status(200).send(msg); // Controller de Update;
        console.log(msg);
    }
    catch (err) {
        next(err); // Middleware de Errors.
    }
});
exports.default = routes;
//# sourceMappingURL=rt_update.js.map