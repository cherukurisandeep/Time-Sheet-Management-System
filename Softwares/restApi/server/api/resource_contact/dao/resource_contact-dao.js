import mongoose from 'mongoose';
import Promise from 'bluebird';
import resource_contactSchema from '../model/resource_contact-model';
import _ from 'lodash';

resource_contactSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    resource_contact
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

resource_contactSchema.statics.createNew = (resource_contact) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(resource_contact)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new resource_contact(resource_contact);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

resource_contactSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    resource_contact
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const resource_contact = mongoose.model('resource_contact', resource_contactSchema);

export default resource_contact;
