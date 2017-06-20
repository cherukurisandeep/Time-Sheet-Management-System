import timeSheetEntryController from '../controller/timeSheetEntry-controller';

export default class timeSheetEntryRoutes {
  static init(router) {
    router
      .route('/api/timesheetentry')
      .get(timeSheetEntryController.getAll)
      .post(timeSheetEntryController.createNew);

    router
      .route('/api/timesheetentry/:id')
      .delete(timeSheetEntryController.removeById);
  }
}
