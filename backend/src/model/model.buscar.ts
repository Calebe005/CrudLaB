import { RowDataPacket } from "mysql2";
import poll from "./model.connect";

export async function buscaBD(data: string, filter: string) {
  //* Busca quantidade de cadastros por email:
  if (filter === "BuscaQntEmail") {
    const [rows] = await poll.execute<RowDataPacket[]>(
      "SELECT count(*) as total FROM \`usuario\` WHERE \`email_usuario\` = ?",
      [data],
    );

    const result = rows[0] as RowDataPacket & { total: number }; // Especificar que o retorno é um array;

    return result.total; // Retorna a quantidade de resultados;

    //* Busca por E-mail
  } else if (filter === "Email") {
    const [rows] = await poll.execute<RowDataPacket[]>(
      "SELECT * FROM \`usuario\` WHERE \`email_usuario\`= ?",
      [data],
    );
    // Tratando tipo de resposta e emitindo:
    let result = rows as RowDataPacket[];
    return result;

    //* Busca por Nome:
  } else if (filter === "Nome") {
    const [rows] = await poll.execute<RowDataPacket[]>(
      "SELECT * FROM \`usuario\` WHERE \`nome_usuario\`= ?",
      [data],
    );
    // Tratando tipo de resposta e emitindo:
    const result = rows as RowDataPacket[];
    return result;

    //* Busca por sobrenome;
  } else if (filter === "Sobrenome") {
    const [rows] = await poll.execute<RowDataPacket[]>(
      "SELECT * FROM \`usuario\` WHERE \`sobrenome_usuario\`= ?",
      [data],
    );
    // Tratando tipo de resposta e emitindo:
    const result = rows as RowDataPacket[];
    return result;

    //* Busca por data de nascimento:
  } else if (filter === "DtNascimento") {
    const [rows] = await poll.execute<RowDataPacket[]>(
      "SELECT * FROM \`usuario\` WHERE \`data_nascimento\`= ?",
      [data],
    );
    // Tratando tipo de resposta e emitindo:
    const result = rows as RowDataPacket[];
    return result;
  } else {
    return "Tipo de pesquisa inválido!";
  }
}
