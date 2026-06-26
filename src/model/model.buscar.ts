import { RowDataPacket } from "mysql2";
import poll from "./model.connect";

export async function buscaQntEmail(email:string) {
   const [rows] = await poll.execute<RowDataPacket[]>("SELECT count(*) as total FROM \`usuario\` WHERE \`email_usuario\` = ?", [email]);

   const result = rows[0] as RowDataPacket & {total: number}; // Especificar que o retorno é um array;

   return result.total; // Retorna a quantidade de resultados;
}