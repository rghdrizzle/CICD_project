import express from "express";
import routes from "../routes";
import {
  addLikeEvent,
  getCategoryImage,
  getCategoryList,
  getDetailEvent,
  getLikeList,
  HomeBanner,
  removeLikeEvent,
} from "../controller/globalController";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/authMiddleware";
import {
  getProfile,
  logout,
  postCustomerJoin,
  postJoin,
  postLogin,
} from "../controller/authController";
import {
  scrapList,
  updateUserData,
  updateUserPw,
} from "../controller/myPageController";

const globalRouter = express.Router();

// globalRouter.get(routes.home, hello);
globalRouter.get(routes.profile, isLoggedIn, getProfile);

// Join, Login, Logout
globalRouter.post(routes.join, postJoin);
globalRouter.post(routes.customerJoin, postCustomerJoin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

// Customer MyPage
globalRouter.post(routes.cusUpdate(), updateUserData);
globalRouter.post(routes.cusPwUpdate(), updateUserPw);

// 스크랩 리스트
globalRouter.get(routes.scrapList(), scrapList);

// 좋아요 리스트
globalRouter.get(routes.likeList(), getLikeList);
globalRouter.post(routes.likeCreateBtn, addLikeEvent);
globalRouter.post(routes.likeRemoveBtn, removeLikeEvent);

// Category List
globalRouter.get(routes.categoryList(), getCategoryList);

// 이벤트 상세 조회
globalRouter.get(routes.detailEvent(), getDetailEvent);

//홈
//카테고리 리스트 조회
globalRouter.get(routes.home, getCategoryImage);

globalRouter.get(routes.banner, HomeBanner);

export default globalRouter;
