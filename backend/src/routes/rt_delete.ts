import { Router } from "express";
import deleteData from "../controller/controller.delete";

const routes = Router();

routes.delete("/", async (req, res, next) => {
  try {
    const msg = await deleteData(req.body.email_usuario); // Controller de Delete
    res.status(200).send(msg);
    console.log(msg);
  } catch (err) {
    next(err); // Chamando Middleware de erros
  }
});

export default routes;
