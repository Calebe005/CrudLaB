import { controllerDelete } from "./controllers/controllers.dashBoard/controller.delete.js";
import { controllerPesquisa } from "./controllers/controllers.dashBoard/controller.pesquisa.js";
import { controllerUpdate } from "./controllers/controllers.dashBoard/controller.update.js";
import { controllerError } from "./errors/error.controller.js";

// Obtendo elementos de botões:
const btnUpdate = document.getElementById("btnUpdate");
const btnDelete = document.getElementById("btnDelete");
const btnPesquisa = document.getElementById("cadastre");

btnUpdate.addEventListener("click", async ()=>{
    try{
        const response = await controllerUpdate(); // Chamando controller de update;
    }catch(err){
        controllerError(err.message);
    }
   
})

btnDelete.addEventListener("click", async ()=>{
    const response = await controllerDelete(); // Controller de delete
})

btnPesquisa.addEventListener("click", async()=>{
    const response = await controllerPesquisa(); // Controller de pesquisa;
})