import personController from '../controller/person-controller';

export default class personRoutes {
  static init(router) {
    router
      .route('/api/person')
      .get(personController.getAll)
      .post(personController.createNew);

    router
      .route('/api/person/:id')
      .delete(personController.removeById)
      .get(personController.getBy)
  }
}
