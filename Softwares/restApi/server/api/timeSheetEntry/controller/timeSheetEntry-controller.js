import timeSheetEntryDAO from '../dao/timeSheetEntry-dao';

export default class timeSheetEntryController {
  static getAll(req, res) {
    timeSheetEntryDAO
      .getAll()
      .then(timesheetentrys => res.status(200).json(timesheetentrys))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _timesheetentry = req.body;

    timeSheetEntryDAO
      .createNew(_timesheetentry)
      .then(timesheetentry => res.status(201).json(timesheetentry))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    timeSheetEntryDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
