import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Variáveis de ambiente;

// Import de Rotas:
import rt_pesquisa from "./routes/rt_pesquisa";
import rt_delete from "./routes/rt_delete";
import rt_login from "./routes/rt_login";
import rt_update from "./routes/rt_update";
import rt_cadastro from "./routes/rt.cadastro";
import { errorHandler } from "./Errors/midle.errors";
// Server
const app = express();
const port = 8080; // Porta local

app.use(express.json()); // Configurando o uso de JSON

// Midllewares de rotas:
app.use("/", rt_pesquisa); // Pesquisa
app.use("/cadastro", rt_cadastro); // Cadastrar usuário
app.use("/login", rt_login); // Fazer Login
app.use("/delete", rt_delete); // Deletar usuário
app.use("/update", rt_update); // Atualizar cadastro

app.use(errorHandler); //! Midleware de errors.

// Inicializando server:
app.listen(port, (err) => {
  if (err) {
    console.error("Erro ao inicializar servidor: ", err.message);
  }
  console.log(`Servidor rodando em https://localhost:${port}`);
});
