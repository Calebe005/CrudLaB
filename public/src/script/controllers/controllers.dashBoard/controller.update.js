import { popValidation } from "../../animations/animation.popValidation.js";
import { popUpOptions } from "../../animations/animationsDashboard/script.popUp.options.js";
import { controllerError } from "../../errors/error.controller.js";
import { Usuario } from "../controller.cadastro.js";

export async function controllerUpdate(){
    popUpOptions('Update'); // Chamando animação do popUp.

     // Verificando se há um container de pesquisa ainda aberto
    const container1 = document.getElementById("container");
    if(container1){
        document.body.removeChild(container1) // Removendo container anterior
    }

    const btnAtualizar = document.getElementById("btnCad");
    btnAtualizar.addEventListener("click", async ()=>{
            // Obtendo dados:
        const nome_usuario = document.getElementById("nomeCad");
        const sobrenome_usuario = document.getElementById("sobrenomeCad");
        const email_usuario = document.getElementById("emailCad");
        const senha_usuario = document.getElementById("senhaCad");
        const confirme_senha_usuario = document.getElementById("cnfSenhaCad");
        const data_nascimento = document.getElementById("dataNascimento");

        // Verificando valores de update:
        const campos = [nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, confirme_senha_usuario, data_nascimento];

        const usuario = new Usuario(
            nome_usuario.value,
            sobrenome_usuario.value,
            email_usuario.value,
            senha_usuario.value,
            confirme_senha_usuario.value,
            data_nascimento.value,
        );
        delete usuario.confirme_senha_usuario; // Excluindo campo

        // Passando apenas os dados digitados para o back
        const usuarioFiltrado = Object.fromEntries(
        Object.entries(usuario).filter(([_, valor]) => valor != null && valor !== "")
        );
        try{
            let response = await fetch("http://localhost:8080/update", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "search": usuarioFiltrado.email_usuario,
                    "update": JSON.stringify(usuarioFiltrado)
                    }),
                });
            
                response =  await response.json();
            if(response.error){
                throw new Error(response.error[0]);
            
            }else{
                popValidation(response); // Exibindo msg de sucesso.
                // Limpando campos   
                campos.forEach((e) => {
                e.value = "";
                });
            }
        }catch(err){
            controllerError(err.message); // Tratando erro.
        }   
    })
}