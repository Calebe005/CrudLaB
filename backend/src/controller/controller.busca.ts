import { buscaBD } from "../model/model.buscar";

interface requisition {
  reqType: string;
  search: string;
}

export default async function pesquisaData(data: requisition) {
  let result = await buscaBD(data.search.toUpperCase(), data.reqType);

  // Verificando se houve retorno.
  if (String(result) == "") {
    return `${data.reqType} não encontrado!`; // Usuário não encontrado!
  } else {
    return result; // Retorna os resultados
  }
}
