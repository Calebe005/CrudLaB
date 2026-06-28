import ValidationErrors from "../Errors/errors.validadition"; // Classe de erros personalizada
import { buscaBD } from "../model/model.buscar";
import Insert_user from "../model/model.inserir.user";
import { hashPass } from "../services/service.bcrypt";

export default async function FilterData(user: any, reqType: string) {
  let erros: string[] = []; // Array de erros encontrados
  let regex; // Armazena exigencias de filtragens.

  // Verificação de nome e sobrenome:
  regex = /\d/; // Teste se possui número
  if (user.nome_usuario && user.sobrenome_usuario) {
    if (user.nome_usuario.length > 20 || user.sobrenome_usuario.length > 20) {
      erros.push("Nome ou sobre nome inválido!");
    }
    if (regex.test(user.nome_usuario) || regex.test(user.sobrenome_usuario)) {
      erros.push("Nome e sobrenome não podem conter números");
    }
  } else if (
    !user.nome_usuario &&
    !user.sobrenome_usuario &&
    reqType == "Cadastro"
  ) {
    erros.push("Nome e sobrenome são campos obrigatórios!");
  }
  //! Verificação de email:
  if (user.email_usuario) {
    // Emails validos:
    let ValidEmail: string[] = ["@GMAIL", "@HOTMAIL", "@YAHOO"];

    // Verifica se o e-mail possui um e somente um dos emails validos.
    if (
      !ValidEmail.some((c) => user.email_usuario.includes(c)) ||
      user.email_usuario.split("@").length != 2
    ) {
      erros.push("Email Inválido!");
    }
    if (user.email_usuario.length > 30) {
      erros.push("Email Muito longo!");
    }

    // Verficar se o e-mail já foi cadastrado:
    if (Number(await buscaBD(user.email_usuario, "BuscaQntEmail")) >= 1) {
      erros.push("E-mail já cadastrado!");
    }
  }
  //! Verificação de Senha:
  if (user.senha_usuario) {
    if (user.senha_usuario.length > 20) {
      erros.push("Senha muito longa!");
    }
    // Exige 1 maiusculo, 1 numero e 1 caractere especial:
    regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
    if (!regex.test(user.senha_usuario)) {
      erros.push(
        "Sua senha deve conter pelo menos 1 número, 1 letra maiúscula e 1 caractere especial!",
      );
    }
  }

  //! Verificação de data de nascimento:
  if (user.data_nascimento) {
    let dados_nascimento: [] = user.data_nascimento.split("-");
    let dt_nascimento: any = dados_nascimento.map((e) => Number(e)); // Data em número;

    if (dt_nascimento[0] > 2026) {
      erros.push("O ano de nascimento é maior que o ano atual!");
    }
    if (dt_nascimento[1] > 12 || dt_nascimento[1] < 1) {
      erros.push("Mês inválido!");
    }
    if (dt_nascimento[2] > 31 || dt_nascimento[2] < 1) {
      erros.push("Dia inválido!");
    }
  }

  // Verificando se houve erros e emitindo erro:
  if (erros.length > 0) {
    throw new ValidationErrors(erros);
  } else {
    // Se houver senha faz o hash:
    if (user.senha_usuario) {
      user.senha_usuario = await hashPass(user.senha_usuario);
    }
  }

  // Verificando qual o tipo de requisição:
  if (reqType == "Cadastro") {
    return await Insert_user(user);
  }

  if (reqType == "Update") {
    if (user.senha_usuario) {
      return user.senha_usuario;
    } else {
      return 1;
    }
  }
}
