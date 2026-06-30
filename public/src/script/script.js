import {popUpLoginCad} from "./animations/script.popUpLogCad.js";
import { loadingScreen, rmLoading } from "./animations/script.loadingScreen.js";
import { controllerCadastro } from "./controllers/controller.cadastro.js";
import { controllerLogin } from "./controllers/controller.login.js";
import { controllerError } from "./errors/error.controller.js";
import { senhasDif } from "./errors/error.input.js";

const bntCadastro = document.getElementById("cadastre");// Botão cadastro superior
const bntLogin = document.getElementById("btnLogin"); // Btn logi superior.

const bntCadastrar = document.getElementById("btnCad") // Botão cadastrar;
const bntLogForm = document.getElementById("btnInput") // Botão login do form;

const txtCadastro = document.getElementById("lCadastra");

const formCadastro = document.getElementById("formCadastro")// Formulario de cadastro
const formLogin = document.getElementById("formLogin") // Formulario de login

// Chamando Função de animação de cadastro:
bntCadastro.addEventListener("click",() => popUpLoginCad("Cadastro"));
txtCadastro.addEventListener("click", () => popUpLoginCad("Cadastro"));
bntLogin.addEventListener("click", () => popUpLoginCad("Login"));


// Chamada dos processos de login e cadastro:
formCadastro.addEventListener("submit", async (event) => {
    event.preventDefault();
    loadingScreen(); // animação loading.

    // Controller cadastro
    try{
        const response =  await controllerCadastro();
        // Remove a tela de loading ao receber resposta:    
        rmLoading();
    }catch(err){
        rmLoading();  // Remove a tela de loading
        controllerError(err.message); // Aciona o controller de erro;
    } 
});

formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();
    loadingScreen();

    try{
        //Chamando controller de login:
        const response = await controllerLogin();
        rmLoading();  // Remove a tela de loading
        window.location.href= "src/pages/page.dashBoard.html";

    }catch(err){
        rmLoading();  // Remove a tela de loading
        controllerError(err.message); // Aciona o controller de erro
    }
    
});


