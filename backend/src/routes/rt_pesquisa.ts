import { RowDataPacket } from "mysql2";
import { Router } from "express";
import pesquisaData from "../controller/controller.busca";

const routes = Router();

routes.get("/", async (req, res, next) => {
  try {
    let result = await pesquisaData(req.body); // Controller de pesquisa;

    res.status(200).json(result);
  } catch (err) {
    next(err); // Chama middleware de errors
  }
});

export default routes;
