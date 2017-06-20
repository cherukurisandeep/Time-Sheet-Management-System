import mongoose from 'mongoose';
import Promise from 'bluebird';
import assosiationSchema from '../model/assosiation-model';
import _ from 'lodash';

assosiationSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    assosiation
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

assosiationSchema.statics.createNew = (assosiation) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(assosiation)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new assosiation(assosiation);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

assosiationSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    assosiation
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const assosiation = mongoose.model('assosiation', assosiationSchema);

export default assosiation;
