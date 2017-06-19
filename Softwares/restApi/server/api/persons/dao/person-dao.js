import mongoose from 'mongoose';
import Promise from 'bluebird';
import personSchema from '../model/person-model';
import _ from 'lodash';

personSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    person
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

personSchema.statics.createNew = (person) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(person)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new person(person);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

personSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    person
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const person = mongoose.model('person', personSchema);

export default person;
