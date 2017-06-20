import timeSheetDAO from '../dao/timeSheet-dao';

export default class timeSheetController {
  static getAll(req, res) {
    timeSheetDAO
      .getAll()
      .then(timesheets => res.status(200).json(timesheets))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _timesheet = req.body;

    timeSheetDAO
      .createNew(_timesheet)
      .then(timesheet => res.status(201).json(timesheet))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    timeSheetDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
