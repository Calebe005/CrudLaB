import { ResultSetHeader } from "mysql2";
import poll from "./model.connect";

export default async function updateBD(
  data: [],
  keyUpDate: any,
  upData: {},
  hash: string,
) {
  const dados: string[] = Object.values(upData); // Dados para update

  let qntUpDate: string[] = []; // Quantidade de Updates;
  let vUpdates: string[] = []; // Valores para update;

  // Verificando quantidade de updates.
  dados.forEach((data, i) => {
    qntUpDate.push("\`" + keyUpDate[i] + "\`" + "= ? ");

    if (keyUpDate[i] == "senha_usuario") {
      vUpdates.push(hash);
    } else {
      vUpdates.push(data);
    }
  });
  // Trasnformando em string para sql
  const setClausule = qntUpDate.join(",");

  // Atualizando dados;
  const [result] = await poll.execute<ResultSetHeader>(
    `UPDATE \`usuario\` SET ${setClausule} WHERE \`id_usuario\` = ${data}`,
    vUpdates,
  );

  return "Usuário atualizado!";
}
