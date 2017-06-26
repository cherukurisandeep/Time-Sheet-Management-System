import mongoose from 'mongoose';
import Promise from 'bluebird';
//import resourceSchema from '../model/resource-model';
import resourceSchema from '../../../models';
import _ from 'lodash';

export default class resourceDAO {
  static getAll(_query) {
    return new Promise((resolve, reject) => {
      console.log('getall method called')
      //console.log(userSchema)
      resourceSchema.resource.findAll({})
        .then(users => {
          //console.log('all users are'+JSON.stringify(users))
          resolve(users)
        }, (error) => {
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }

  static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request
      console.log(_reqBody.fistname)
      resourceSchema.resource.create({
        fistname: _reqBody.fistname,
        lastname: _reqBody.lastname,
        password: _reqBody.password,
        email : _reqBody.email,
        dob: _reqBody.dob,
        joindate: _reqBody.joindate,
        enddate: _reqBody.enddate,
        role: _reqBody.role
      }).then(users => {
        resolve(users)
      })
        .catch(error => {
          reject('Not Created ')

        })
    })

  }

  static removeById(_id) {
    return new Promise((resolve, reject) => {
      console.log('in dao')
      resourceSchema.resource
        .findById(_id)
        .then(user => {
          if (!user) {
            return reject(404);
          }
          return user
            .destroy()
            .then(() => {
              resolve(204);
            }, (error) => reject(error));
        }, (error) => {
          reject(error);
        });
    });

  }

  /*
   .find({where:{id : _id }} || { where : {username : _id}})
   .find({where: {$or: [{fistname: _id}, {lastname: _id}, {role: _id}, {dob: new Date(_id)}]}})

   */
  static  getById(_id) {
    var d = _id;
    // if(typeof d=== number){
      //console.log("Sai Sandeep Cherukuri")
    // }date instanceof Date && !isNaN(date.valueOf())
    // console.log("<----->"+typeof d);
    let date = new Date(_id);
    if ( d.includes('@')) {
      return new Promise((resolve, reject) => {
        console.log('getById Dao');

        // _id = '%'+_id+'%'
        resourceSchema.resource
          .find({where: {$or: [{email : _id}]}})
          .then((users) => {
            if (!users) {
              return reject(404)
            }
            else {
              return resolve(users)
            }
          }, (error) => {
            reject(error)
          })

      })
    }
    else {
      return new Promise((resolve, reject) => {
        console.log('getById Dao');
        // _id = '%'+_id+'%'
        resourceSchema.resource
          .findAll({where: {id: _id}})
          .then((users) => {
            if (!users) {
              return reject(404)
            }
            else {
              return resolve(users)
            }
          }, (error) => {
            reject(error)
          })

      })
    }
  }

  static update(_id,_reqBody) {
    return new Promise((resolve, reject) => {
     _id = _reqBody.id;
     console.log(_id);
      resourceSchema.resource
        .update({
            id     : _reqBody.id,
            fistname: _reqBody.fistname,
            lastname : _reqBody.lastname,
            password: _reqBody.password,
            dob: _reqBody.dob,
            joindate: _reqBody.joindate,
            enddate: _reqBody.enddate,
            role : _reqBody.role
          },
          {where: {id: _id}, returning: true, plain: true})
        .then((users) => {
          resolve(users)
        }, (error) => {
          reject(error)
        })
    })
  }
}
