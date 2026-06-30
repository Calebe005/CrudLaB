import { campoVazio } from "./error.campoVazio.js";
import { popUpError } from "./error.popUp.js";
import { senhasDif, senhaIncorreta, emailIncorreto } from "./error.input.js";

export function controllerError(msg) {
  if (msg == "campoVazio") {
    campoVazio();
    return
  }
  if (msg == "senhasDif") {
    senhasDif();
    return
  }

  if (msg == "Email não encontrado!") {
    emailIncorreto();
    return
  }

  if (msg == "Senha incorreta!") {
    senhaIncorreta();
    return
  }

  popUpError(msg);
}
