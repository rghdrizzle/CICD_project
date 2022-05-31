import express from "express";
import { getDetailEvent } from "../controller/globalController";
import { createEvent, updateEvent } from "../controller/models/eventController";
import { createShop } from "../controller/models/shopController";
import {
  getOwnerEventList,
  getShopList,
  ownerCreateEvent,
  saveEventForm,
  updateShop,
} from "../controller/ownerController";
import { imgDefine, mkFolder, upload } from "../controller/postImageController";
import routes from "../routes";

const ownerRouter = express.Router();

// 가게 조회
ownerRouter.get(routes.shopList(), getShopList);

//가게 수정
ownerRouter.put(routes.updateShop(), updateShop);

//가게 등록
ownerRouter.post(routes.create, createShop);

//이벤트 관리
ownerRouter.get(routes.eventList(), getOwnerEventList);

//이벤트 상세 조회(만들 필요가 있을까)
ownerRouter.get(routes.detailEvent(), getDetailEvent);

//이벤트 등록
ownerRouter.post(
  routes.createEvent(),
  mkFolder,
  saveEventForm,
  upload.single("img"),
  imgDefine,
  ownerCreateEvent
);

//이벤트 수정
ownerRouter.put(routes.updateEvent(), updateEvent);

export default ownerRouter;
