import { Router } from "express";
import upDate from "../controller/controller.update";

const routes = Router();

routes.patch("/", async (req, res, next) => {
  try {
    const msg = await upDate(req.body);
    res.status(200).send(msg); // Controller de Update;
    console.log(msg);
  } catch (err) {
    next(err); // Middleware de Errors.
  }
});

export default routes;
