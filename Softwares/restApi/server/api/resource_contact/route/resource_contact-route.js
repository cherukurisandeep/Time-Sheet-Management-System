import resource_contactController from '../controller/resource_contact-controller';

export default class resource_contactRoutes {
  static init(router) {
    router
      .route('/api/resource_contact')
      .get(resource_contactController.getAll)
      .post(resource_contactController.createNew);

    router
      .route('/api/resource_contact/:id')
      .delete(resource_contactController.removeById);
  }
}
