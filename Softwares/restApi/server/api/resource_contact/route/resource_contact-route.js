import resource_contactController from '../controller/resource_contact-controller';

export default class resource_contactRoutes {
  static init(router) {
    router
      .route('/tsms/resource/:id/resource_contact')
      .get(resource_contactController.getAll)
      .post(resource_contactController.createNew);

    router
      .route('/tsms/resource/:id/resource_contact/:res_id')
      .delete(resource_contactController.removeById);
  }
}
