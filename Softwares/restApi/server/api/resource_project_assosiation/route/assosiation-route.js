import assosiationController from '../controller/assosiation-controller';

export default class assosiationRoutes {
  static init(router) {
    router
      .route('/api/assosiation')
      .get(assosiationController.getAll)
      .post(assosiationController.createNew);

    router
      .route('/api/assosiation/:id')
      .delete(assosiationController.removeById);
  }
}
