import express from "express";
import { UserController } from "../controller/userController";

let userController: UserController;

export class UserRoute {
  constructor() {
    userController = new UserController();
  }

  userRouter(app: express.Application) {
    app.post("/user", userController.userCreate);
  }
}
