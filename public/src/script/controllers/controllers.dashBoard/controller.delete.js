import { popValidation } from "../../animations/animation.popValidation.js";
import { popUpOptions } from "../../animations/animationsDashboard/script.popUp.options.js";
import { controllerError } from "../../errors/error.controller.js";

const btnDelete = document.getElementById('btnExcluir');

export async function controllerDelete(){
    popUpOptions("Delete");

    btnDelete.addEventListener("click", async()=>{
        let response = await fetch("http://localhost:8080/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "email_usuario" : localStorage.getItem("usuario")
                 })// Buscando email atual;
                });

        let result = await response.json();

        if(result.error){
            controllerError(result.error[0]);
            return
        }else{
            console.log('Usuario deletado!');         
            try{ 
                window.location.href = "/index.html";
            }catch(err){
                console.log("Erro ao direcionar", err);
            }
            
            
        }
        
    });
    
}