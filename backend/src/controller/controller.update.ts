import { hash } from "bcrypt";
import { buscaBD } from "../model/model.buscar";
import poll from "../model/model.connect";
import updateBD from "../model/model.update";
import FilterData from "./controller.filter.dados";
import { convertProcessSignalToExitCode } from "util";
import ValidationErrors from "../Errors/errors.validadition";

interface requisition {
  search: string;
  update: any;
}
export default async function upDate(data: requisition) {
  // Chamar controller de busca para obter usuário:
  let result: any = await buscaBD(data.search, "Email");
  if(result == ""){
    throw new ValidationErrors(["E-mail não encontrado!"]);
  }
  result = await JSON.parse(JSON.stringify(result, null, 2));
  result = result[0].id_usuario; // Passando apenas o id;
  
  let keyUpDate = Object.keys(JSON.parse(data.update)); // Retirando keys da solicitação de update;
  // Tornando as modificações maiúsculas;
  let updateObj = Object.fromEntries(
    Object.entries(JSON.parse(data.update)).map(([chave, valor]) => [
      chave,
      typeof valor === "string" && chave != "senha_usuario"
        ? valor.toUpperCase()
        : valor,
    ]),
  );
  console.log(updateObj);
  // Fazer filtragem de dados se houver:
  const status = await FilterData(updateObj, "Update");
  let hash; // hash da senha se houver
  if (keyUpDate.includes("senha_usuario")) {
    hash = status;
  }
  // Chamar Model para update de dados:
  const update = await updateBD(result, keyUpDate, updateObj, hash);
  return update;
}
