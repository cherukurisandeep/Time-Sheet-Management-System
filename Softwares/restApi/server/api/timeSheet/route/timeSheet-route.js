import timeSheetController from '../controller/timeSheet-controller';

export default class timeSheetRoutes {
  static init(router) {
    router
      .route('/api/timesheet')
      .get(timeSheetController.getAll)
      .post(timeSheetController.createNew);

    router
      .route('/api/timesheet/:id')
      .delete(timeSheetController.removeById);
  }
}
