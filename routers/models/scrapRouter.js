import express from "express";
import {
  createScrap,
  deleteScrap,
  getScrap,
  getScraps,
} from "../../controller/models/scrapController";
import routes from "../../routes";

const scrapRouter = express.Router();

scrapRouter.get(routes.readAll, getScraps);
scrapRouter.get(routes.read(), getScrap);
scrapRouter.post(routes.create, createScrap);
scrapRouter.put(routes.remove(), deleteScrap);

export default scrapRouter;
