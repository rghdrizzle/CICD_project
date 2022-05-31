import express from "express";
import { ownerList, ownerShopList } from "../controller/adminController";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controller/models/categoryController";
import { imgDefine, upload } from "../controller/postImageController";
import routes from "../routes";

const adminRouter = express.Router();

// 카테고리 조회
adminRouter.get(routes.read, getCategories);

// 카테고리 추가
adminRouter.post(
  routes.create,
  upload.single("img"),
  imgDefine,
  createCategory
);

// 카테고리 수정
adminRouter.put(routes.update(), updateCategory);

// 카테고리 삭제
adminRouter.put(routes.remove(), deleteCategory);

// 사장님 조회
adminRouter.get(routes.ownerList, ownerList);

// 사장님의 가게 정보 조회
adminRouter.get(routes.ownerShop(), ownerShopList);

export default adminRouter;
