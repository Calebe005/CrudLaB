import { popValidation } from "../animations/animation.popValidation.js";

export async function controllerLogin(){
    const email_usuario = document.getElementById("emailInput");
    const senha_usuario = document.getElementById("senhaInput");

    const usuarioLogin = {
        "email_usuario": email_usuario.value,
        "senha_usuario": senha_usuario.value
    }

    const camposLogin = [email_usuario, senha_usuario];

    let response = await fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(usuarioLogin)
    });

    response = await response.json(); // Resposta do servidor;
    
    if(response.error){
        console.log(response);
        throw new Error(response.error);
    }else{
        localStorage.setItem("usuario",usuarioLogin.email_usuario);  // Armazena o login atual no localStorage;  
        popValidation(response);
    }

}