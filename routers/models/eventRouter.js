import express from "express";
import { getEvents, getEvent,
  createEvent,
  updateEvent,
  deleteEvent } from "../../controller/models/eventController";

import routes from "../../routes";
import {createImage} from "../../controller/models/imageController";

const eventRouter = express.Router();

eventRouter.get(routes.readAll, getEvents);
eventRouter.get(routes.read(), getEvent);
eventRouter.post(routes.create, createImage, createEvent);
eventRouter.put(routes.update(), updateEvent); //수정 시 이미지 어떻게 할 지 생각
eventRouter.put(routes.remove(), deleteEvent);

export default eventRouter;