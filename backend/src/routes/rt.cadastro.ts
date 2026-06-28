import { Router } from "express";
import { DUser } from "../controller/controller.org.dados"; // Organizador de dados
import poll from "../model/model.connect"; // Chamando Connect ao banco.
import Insert_user from "../model/model.inserir.user";
import ValidationErrors from "../Errors/errors.validadition";

const routes = Router();

routes.post("/", async (req, res, next) => {
  try {
    const menssagem = await DUser(req.body); // Chamando controller de dados;
    res.status(201).json(menssagem);
    console.log(menssagem);
  } catch (err) {
    next(err); // Passa todos os erros para o Middleware de erros
  }
});

export default routes;
