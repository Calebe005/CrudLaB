import { hash } from "bcrypt";
import { buscaBD } from "../model/model.buscar";
import poll from "../model/model.connect";
import updateBD from "../model/model.update";
import FilterData from "./controller.filter.dados";

interface requisition {
  search: string;
  update: {};
}
export default async function upDate(data: requisition) {
  // Chamar controller de busca para obter usuário:
  let result: any = await buscaBD(data.search, "Email");
  result = await JSON.parse(JSON.stringify(result, null, 2));
  result = result[0].id_usuario; // Passando apenas o id;

  let keyUpDate = Object.keys(data.update); // Retirando keys da solicitação de update;

  // Tornando as modificações maiúsculas;
  data.update = Object.fromEntries(
    Object.entries(data.update).map(([chave, valor]) => [
      chave,
      typeof valor === "string" && chave != "senha_usuario"
        ? valor.toUpperCase()
        : valor,
    ]),
  );

  // Fazer filtragem de dados se houver:
  const status = await FilterData(data.update, "Update");
  let hash; // hash da senha se houver
  if (keyUpDate.includes("senha_usuario")) {
    hash = status;
  }

  // Chamar Model para update de dados:
  const update = await updateBD(result, keyUpDate, data.update, hash);
  return update;
}
