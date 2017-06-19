import resource_roleController from '../controller/resource_role-controller';

export default class resource_roleRoutes {
  static init(router) {
    router
      .route('/api/resource_role')
      .get(resource_roleController.getAll)
      .post(resource_roleController.createNew);

    router
      .route('/api/resource_role/:id')
      .delete(resource_roleController.removeById);
  }
}
