"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_login_1 = __importDefault(require("../controller/controller.login"));
const routes = (0, express_1.Router)();
routes.get("/", async (req, res, next) => {
    try {
        const msg = await (0, controller_login_1.default)(req.body); // Controller login.
        res.status(200).send(msg);
        console.log(msg);
    }
    catch (err) {
        next(err); // Midlleware de errors
    }
});
exports.default = routes;
//# sourceMappingURL=rt_login.js.map