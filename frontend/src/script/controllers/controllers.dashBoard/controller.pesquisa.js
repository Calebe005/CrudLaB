import { popUpOptions } from "../../animations/animationsDashboard/script.popUp.options.js";
import { controllerError } from "../../errors/error.controller.js";
import {popValidation} from "../../animations/animation.popValidation.js"
import { popResult } from "../../animations/animationsDashboard/animation.popUpResult.js";

export async function controllerPesquisa(){
    popUpOptions("Pesquisa");

    const pesquisar = document.getElementById("btnPesquisa");

    pesquisar.addEventListener("click", async()=>{
        // Obtendo dados:
        const option = document.getElementById("tipoBusca").value;
        const search = document.getElementById("campoPesquisa").value;

        const result = await fetch("http://localhost:8080/pesquisa", {
            method : "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "reqType": option,
                "search" : search
            })
        });

        const response = await result.json();
        
        if(response.error){
            controllerError(response.error[0]);
            return
        }else{
            popResult(response);
        }

    })

}