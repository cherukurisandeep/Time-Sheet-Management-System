import userController from '../controller/user-controller';

export default class userRoutes {
  static init(router) {
    console.log("_----------->");
    router
      .route("/tsms/user")
      .get(userController.getAll)
      .post(userController.createNew);

    router
      .route("/tsms/user/:id")
      .delete(userController.removeById)
      .get(userController.getById)
      .put(userController.update);
  }
}
