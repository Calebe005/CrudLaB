import bcrypt from "bcrypt";

// Retornar hash de senha:
export async function hashPass(password: string) {
  const saltRounds = Number(process.env.salt); // Saltos para o hash da senha;

  // Hash de senha:
  const hash = await bcrypt.hash(password, saltRounds);
  return hash; // Retornando o hash da senha.
}

// Comparar senha:
export async function comparePass(password: string, BDPass: string) {
  const result = await bcrypt.compare(password, BDPass);
  return result;
}
