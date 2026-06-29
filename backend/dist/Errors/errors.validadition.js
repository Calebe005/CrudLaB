"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe personalizada de erros de validação:
class ValidationErrors extends Error {
    constructor(erros) {
        (super("Ocorreram erros de validação"),
            (this.name = "ValidationError"),
            (this.errors = erros));
    }
}
exports.default = ValidationErrors;
//# sourceMappingURL=errors.validadition.js.map