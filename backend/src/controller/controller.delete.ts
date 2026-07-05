import ValidationErrors from "../Errors/errors.validadition";
import daleteModel from "../model/mode.delete";

export default async function deleteData(email: string) {
  const result = await daleteModel(email); // Chamando Model de delete:

  // Verificando resposta e retornando
  if (result) {
    console.log("Usuário deletado!");
    return "Usuário deletado!";
  } else {
    throw new ValidationErrors(["Usuario não encontrado!"]);
  }
}
