import poll from "./model.connect";

export default async function Insert_user(user: any) {

  try {
    const [result] = await poll.execute(
      "INSERT INTO \`usuario\`(\`nome_usuario\`, \`sobrenome_usuario\`, \`email_usuario\`, \`senha_usuario\`,\`data_nascimento\`)VALUES (?, ?, ?, ?, ?)",
      [
        user.nome_usuario ?? null,
        user.sobrenome_usuario ?? null,
        user.email_usuario ?? null,
        user.senha_usuario ?? null,
        user.data_nascimento ?? null,
      ],
    );
    return "Cadastro Efetuado!";
  } catch (err: any) {
    console.error(err);
    throw new Error("Erro ao inserir cadastro na base de dados:");
  }
}
