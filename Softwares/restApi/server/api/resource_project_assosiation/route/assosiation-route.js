import assosiationController from '../controller/assosiation-controller';

export default class assosiationRoutes {
  static init(router) {
    router
      .route('/tsms/ass/resource/:id/project/:id')
      .get(assosiationController.getAll)
      .post(assosiationController.createNew);

    router
      .route('/tsms/assosiation/:id')
      .delete(assosiationController.removeById);
  }
}
