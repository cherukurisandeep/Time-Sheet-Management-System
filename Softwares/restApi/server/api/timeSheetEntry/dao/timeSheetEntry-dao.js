import mongoose from 'mongoose';
import Promise from 'bluebird';
import timesheetentrySchema from '../model/timeSheetEntry-model';
import _ from 'lodash';

timesheetentrySchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    timeSheetEntry
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

timesheetentrySchema.statics.createNew = (timesheetentry) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(timesheetentry)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new timeSheetEntry(timesheetentry);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

timesheetentrySchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    timeSheetEntry
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const timeSheetEntry = mongoose.model('timeSheetEntry', timesheetentrySchema);

export default timeSheetEntry;
