import { Router, IRouter } from "express";

import { UserController } from "@/controllers";

class UserRoute {
  public userRoute: IRouter;

  public constructor() {
    this.userRoute = Router();

    this.routeGet();
    this.routePost();
    this.routePut();
    this.routeDelete();
  }

  // GET /api/user
  private routeGet() {
    this.userRoute.get("/", UserController.getUser);
  }

  // POST /api/user
  private routePost() {
    this.userRoute.post(
      "/",
      [
        // validation
      ],
      UserController.postUser,
    );
  }

  // PUT /api/user/:id
  private routePut() {
    this.userRoute.post(
      "/:id",
      [
        // validation
      ],
      UserController.updateUser,
    );
  }

  // DELETE /api/user/:id
  private routeDelete() {
    this.userRoute.post(
      "/:id",
      [
        // validation
      ],
      UserController.deleteUser,
    );
  }
}

export default new UserRoute().userRoute;
