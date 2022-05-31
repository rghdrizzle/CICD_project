import express from "express";
// import multer from "multer";
// import path from "path";
// import fs from "fs";
import models from "../models";
import routes from "../routes";
import {
  upload,
  imgDefine,
  getPostImage,
} from "../controller/postImageController";
// import {isLoggedIn} from "../middlewares/authMiddleware"
const Image = models.User;

const postImageRouter = express.Router();

postImageRouter.get(routes.home, getPostImage);
postImageRouter.post(routes.img, upload.single("img"), imgDefine);
export default postImageRouter;
