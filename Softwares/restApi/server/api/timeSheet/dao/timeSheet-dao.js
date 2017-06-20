import mongoose from 'mongoose';
import Promise from 'bluebird';
import timesheetSchema from '../model/timeSheet-model';
import _ from 'lodash';

timesheetSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    timeSheet
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

timesheetSchema.statics.createNew = (timesheet) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(timesheet)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new timeSheet(timesheet);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

timesheetSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    timeSheet
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const timeSheet = mongoose.model('timeSheet', timesheetSchema);

export default timeSheet;
