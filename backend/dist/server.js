"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Variáveis de ambiente;
// Import de Rotas:
const rt_pesquisa_1 = __importDefault(require("./routes/rt_pesquisa"));
const rt_delete_1 = __importDefault(require("./routes/rt_delete"));
const rt_login_1 = __importDefault(require("./routes/rt_login"));
const rt_update_1 = __importDefault(require("./routes/rt_update"));
const rt_cadastro_1 = __importDefault(require("./routes/rt.cadastro"));
const midle_errors_1 = require("./Errors/midle.errors");
// Server
const app = (0, express_1.default)();
const port = 8080; // Porta local
app.use(express_1.default.json()); // Configurando o uso de JSON
// Midllewares de rotas:
app.use("/", rt_pesquisa_1.default); // Pesquisa
app.use("/cadastro", rt_cadastro_1.default); // Cadastrar usuário
app.use("/login", rt_login_1.default); // Fazer Login
app.use("/delete", rt_delete_1.default); // Deletar usuário
app.use("/update", rt_update_1.default); // Atualizar cadastro
app.use(midle_errors_1.errorHandler); //! Midleware de errors.
// Inicializando server:
app.listen(port, (err) => {
    if (err) {
        console.error("Erro ao inicializar servidor: ", err.message);
    }
    console.log(`Servidor rodando em https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map