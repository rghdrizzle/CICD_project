import express from "express";
import {
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
} from "../../controller/models/shopController";
import routes from "../../routes";

const shopRouter = express.Router();

shopRouter.get(routes.readAll, getShops);
shopRouter.get(routes.read(), getShop);
shopRouter.post(routes.create, createShop);
shopRouter.put(routes.update(), updateShop);
shopRouter.put(routes.remove(), deleteShop);

export default shopRouter;
