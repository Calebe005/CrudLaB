import { ResultSetHeader } from "mysql2";
import poll from "./model.connect";

export default async function daleteModel(email: string) {
  const [result] = await poll.execute<ResultSetHeader>(
    "DELETE FROM \`usuario\` WHERE \`email_usuario\` = ?",
    [email],
  );

  return result.affectedRows; // Retornando se houve alterações.
}
