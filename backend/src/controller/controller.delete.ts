import daleteModel from "../model/mode.delete";

export default async function deleteData(email: string) {
  const result = await daleteModel(email); // Chamando Model de delete:

  // Verificando resposta e retornando
  if (result) {
    return "Usuário deletado!";
  } else {
    return "Usuario não encontrado!";
  }
}
