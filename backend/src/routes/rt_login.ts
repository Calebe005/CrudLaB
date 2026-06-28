import { Router } from "express";
import loginUser from "../controller/controller.login";

const routes = Router();

routes.get("/", async (req, res, next) => {
  try {
    const msg = await loginUser(req.body); // Controller login.
    res.status(200).send(msg);
    console.log(msg);
  } catch (err) {
    next(err); // Midlleware de errors
  }
});

export default routes;
