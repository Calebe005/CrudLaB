import { popUpError } from "./error.popUp.js";

export function senhasDif(){
    // Obtendo campos:
    const senha_usuario = document.getElementById("senhaCad");
    const confirme_senha_usuario = document.getElementById("cnfSenhaCad");

    senha_usuario.classList.add("errorInput");
    confirme_senha_usuario.classList.add("errorInput");

    setTimeout(()=>{
        senha_usuario.classList.remove("errorInput");
        confirme_senha_usuario.classList.remove("errorInput");
    }, 1000);

    popUpError("As senhas não coicidem"); // Pop up error;
}

export function senhaIncorreta(){
    const senha_usuario = document.getElementById("senhaInput");

    senha_usuario.classList.add("errorInput");
    setTimeout(()=>{
        senha_usuario.classList.remove("errorInput");

    }, 1000);

    popUpError("Senha Incorreta!");
}

export function emailIncorreto(){
    const email_usuario = document.getElementById("emailInput");

    email_usuario.classList.add("errorInput");
    setTimeout(()=>{
        email_usuario.classList.remove("errorInput");

    }, 1000);

    popUpError("E-mail inválido!");

}
