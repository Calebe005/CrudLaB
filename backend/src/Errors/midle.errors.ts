import { Request, Response, NextFunction } from "express";
import ValidationErrors from "./errors.validadition";

// Função que faz o tratamento de erros
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ValidationErrors) {
    console.log(err.errors);
    return res.status(400).json({
      message: err.message,
      error: err.errors,
    });  
  }

  console.error(err.message);
  return res.status(500).json(`Erro interno no servidor!:${err}`);
}
