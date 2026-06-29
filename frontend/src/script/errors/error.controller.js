import { campoVazio } from "./error.campoVazio.js";
import { popUpError } from "./error.popUp.js";
import { senhasDif } from "./error.senhas.js";

export function controllerError(msg){

    if(msg == "campoVazio"){
        campoVazio();
        return
    }
    if(msg == "senhasDif"){
        senhasDif();
        return
    }

    popUpError(msg);
    
}