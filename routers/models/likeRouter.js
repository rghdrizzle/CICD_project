import express from "express";
import {
  createLike,
  getLike,
  getLikes,
  realDeleteLike,
} from "../../controller/models/likeController";
import routes from "../../routes";

const likeRouter = express.Router();

likeRouter.get(routes.readAll, getLikes);
likeRouter.get(routes.read(), getLike);
likeRouter.post(routes.create, createLike);
likeRouter.delete(routes.remove(), realDeleteLike);

export default likeRouter;
