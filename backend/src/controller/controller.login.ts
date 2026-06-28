import { RowDataPacket } from "mysql2";
import pesquisaData from "./controller.busca";
import { comparePass } from "../services/service.bcrypt";

interface requisition {
  email_usuario: string;
  senha_usuario: string;
}

export default async function loginUser(data: requisition) {
  // Extraindo objeto de dados:
  let dataReq = await pesquisaData({
    reqType: "Email",
    search: data.email_usuario,
  });
  dataReq = dataReq as RowDataPacket[];
  let dataBD = JSON.parse(JSON.stringify(dataReq, null, 2));

  // Dados encontrados no banco:
  let senhaBD = dataBD[0].senha_usuario; // Senha

  // Verificando senha:
  const hash = await comparePass(data.senha_usuario, senhaBD); // service bcrypt;

  // Se o login for bem efetuado:
  if (hash) {
    return "Login efetuado!";
  }

  return "Senha incorreta!";
}
