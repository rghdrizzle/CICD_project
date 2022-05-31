import express from "express";
import routes from "../../routes";
import {
  createImage,
  deleteImage,
  getImage,
  getImages,
  updateImage,
} from "../../controller/models/imageController";

const imageRouter = express.Router();

imageRouter.get(routes.readAll, getImages);
imageRouter.get(routes.read(), getImage);
imageRouter.post(routes.create, createImage);
imageRouter.put(routes.update(), updateImage);
imageRouter.put(routes.remove(), deleteImage);

export default imageRouter;
