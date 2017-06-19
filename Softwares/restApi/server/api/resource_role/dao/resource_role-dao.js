import mongoose from 'mongoose';
import Promise from 'bluebird';
import resource_roleSchema from '../model/resource_role-model';
import _ from 'lodash';

resource_roleSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    resource_role
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

resource_roleSchema.statics.createNew = (resource_role) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(resource_role)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new resource_role(resource_role);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

resource_roleSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    resource_role
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const resource_role = mongoose.model('resource_role', resource_roleSchema);

export default resource_role;
