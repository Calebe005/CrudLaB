"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const errors_validadition_1 = __importDefault(require("./errors.validadition"));
// Função que faz o tratamento de erros
function errorHandler(err, req, res, next) {
    if (err instanceof errors_validadition_1.default) {
        return res.status(401).json({
            "message": err.message,
            "error": err.errors
        });
    }
    console.error(err.message);
    return res.status(500).send("Erro interno no servidor!");
}
;
//# sourceMappingURL=midle.errors.js.map