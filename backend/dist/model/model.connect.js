"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const poll = promise_1.default.createPool({
    host: "localhost",
    password: `${process.env.BD_PASS}`,
    database: "login2",
    user: "root",
    connectionLimit: 10
});
exports.default = poll;
//# sourceMappingURL=model.connect.js.map