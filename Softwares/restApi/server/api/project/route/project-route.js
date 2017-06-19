import projectController from '../controller/project-controller';

export default class projectRoutes {
  static init(router) {
    router
      .route('/tsms/project')
      .get(projectController.getAll)
      .post(projectController.createNew);

    router
      .route('/tsms/project/:id')
      .delete(projectController.removeById)
      .get(projectController.getById)
      .put(projectController.update);
  }
}
