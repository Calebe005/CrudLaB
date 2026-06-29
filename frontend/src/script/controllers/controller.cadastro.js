import { popValidation } from "../animations/animation.popValidation.js";
import { popUpError } from "../errors/error.popUp.js";
import { senhasDif } from "../errors/error.senhas.js";

class Usuario {
    constructor(
      nome_usuario, 
      sobrenome_usuario,
      email_usuario,
      senha_usuario,
      confirme_senha_usuario,
      data_nascimento
    ){
        this.nome_usuario = nome_usuario;
        this.sobrenome_usuario = sobrenome_usuario;
        this.email_usuario = email_usuario;
        this.senha_usuario = senha_usuario;
        this.confirme_senha_usuario = confirme_senha_usuario;
        this.data_nascimento = data_nascimento;
        
    }
}

export async function controllerCadastro(){
    //Obter todos os dados de cadastro:
    const nome_usuario = document.getElementById("nomeCad").value;
    const sobrenome_usuario = document.getElementById("sobrenomeCad").value;
    const email_usuario = document.getElementById("emailCad").value;
    const senha_usuario = document.getElementById("senhaCad").value;
    const confirme_senha_usuario = document.getElementById("cnfSenhaCad").value;
    const data_nascimento = document.getElementById("dataNascimento").value;

    // Organizando usuario: 
    const usuario = new Usuario(
        nome_usuario, 
        sobrenome_usuario,
        email_usuario,
        senha_usuario,
        confirme_senha_usuario,
        data_nascimento
    );

    // Verificando se todos os campos estão preenchidos:
    if(!nome_usuario || !sobrenome_usuario || !email_usuario || !senha_usuario || !confirme_senha_usuario || !data_nascimento){
        throw new Error("campoVazio");
    }
    // Verificando se as senhas coincidem:
    if(usuario.senha_usuario != usuario.confirme_senha_usuario){
        throw new Error("senhasDif"); // senhas não coincidem.
    }

    delete usuario.confirme_senha_usuario; // Excluindo campo desnecessário para o back.
    let  response = await fetch("http://localhost:8080/cadastro",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(usuario)
    });

    response = await response.json(); // Resposta.

    // Verificando se a resposta foi um erro:
    if(response.error){
        throw new Error(response.error[0]);
    }
    else{
        popValidation(response);
    }
    
}