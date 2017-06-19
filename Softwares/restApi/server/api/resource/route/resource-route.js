import resourceController from '../controller/resource-controller';

export default class resourceRoutes {
  static init(router) {
    router
      .route('/tsms/resource')
      .get(resourceController.getAll)
      .post(resourceController.createNew);

    router
      .route('/tsms/resource/:id')
      .delete(resourceController.removeById)
      .get(resourceController.getById)
      .put(resourceController.update);
  }
}
