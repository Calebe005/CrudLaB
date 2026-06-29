import { popUpError } from "./error.popUp.js";

export function campoVazio(){
    //Obter todos os dados de cadastro:
    const nome_usuario = document.getElementById("nomeCad");
    const sobrenome_usuario = document.getElementById("sobrenomeCad");
    const email_usuario = document.getElementById("emailCad");
    const senha_usuario = document.getElementById("senhaCad");
    const confirme_senha_usuario = document.getElementById("cnfSenhaCad");
    const data_nascimento = document.getElementById("dataNascimento");

    nome_usuario.classList.add("errorInput");
    sobrenome_usuario.classList.add("errorInput");
    email_usuario.classList.add("errorInput");
    senha_usuario.classList.add("errorInput");
    confirme_senha_usuario.classList.add("errorInput");
    data_nascimento.classList.add("errorInput");

    setTimeout(()=>{
        nome_usuario.classList.remove("errorInput");
        sobrenome_usuario.classList.remove("errorInput");
        email_usuario.classList.remove("errorInput");
        senha_usuario.classList.remove("errorInput");
        confirme_senha_usuario.classList.remove("errorInput");
        data_nascimento.classList.remove("errorInput");
    }, 1000);

    popUpError("Todos os campos são obrigatórios;"); // popUp error;
}