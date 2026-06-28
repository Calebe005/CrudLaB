import ValidationErrors from "../Errors/errors.validadition";
import FilterData from "./controller.filter.dados";

// Função para organizar os dados recebidos;
export async function DUser(req: any) {
  // Classe de objetos de usuarios:
  class Usuario {
    id_usuario?: number;
    nome_usuario?: string;
    sobre_nome_usuario?: string;
    email_usuario?: string;
    senha_usuario?: string;
    data_nascimento?: string;

    constructor(dados: Partial<Usuario>) {
      Object.assign(this, dados);
    }
  }

  // Atribuindo dados do usuario para cadastro;
  let dataUser = new Usuario(req);
  // Tornando dados string UpperCase exceto a senha:
  dataUser = Object.fromEntries(
    Object.entries(dataUser).map(([chave, valor]) => [
      chave,
      typeof valor === "string" && chave != "senha_usuario"
        ? valor.toUpperCase()
        : valor,
    ]),
  );

  return await FilterData(dataUser, "Cadastro"); // Controller para Filtragem dos dados;
}
