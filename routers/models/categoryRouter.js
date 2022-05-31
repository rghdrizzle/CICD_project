// const express = require("express");
// const routes = require("../routes");
import express from "express";
import routes from "../../routes";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../../controller/models/categoryController";
import { createImage } from "../../controller/models/imageController";

const categoryRouter = express.Router();

categoryRouter.get(routes.readAll, getCategories);
categoryRouter.get(routes.read(), getCategory);
categoryRouter.post(routes.create, createImage, createCategory);
categoryRouter.put(routes.update(), updateCategory); //수정 시 이미지 어떻게 할 지 생각
categoryRouter.put(routes.remove(), deleteCategory);

export default categoryRouter;
