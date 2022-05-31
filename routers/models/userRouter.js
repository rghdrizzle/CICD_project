import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../controller/models/userController";
import routes from "../../routes";

const userRouter = express.Router();

userRouter.get(routes.readAll, getUsers);
userRouter.get(routes.read(), getUser);
userRouter.post(routes.create, createUser);
userRouter.put(routes.update(), updateUser);
userRouter.put(routes.remove(), deleteUser);

export default userRouter;
