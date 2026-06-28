// Classe personalizada de erros de validação:
export default class ValidationErrors extends Error {
  name: string;
  errors: string[];
  constructor(erros: string[]) {
    (super("Ocorreram erros de validação"),
      (this.name = "ValidationError"),
      (this.errors = erros));
  }
}
