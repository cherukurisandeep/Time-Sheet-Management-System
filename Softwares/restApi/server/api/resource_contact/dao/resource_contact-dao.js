//import mongoose from 'mongoose';
import Promise from 'bluebird';
import resourceSchema from '../../../models';
import _ from 'lodash';

export default class resource_contactDAO {
  static getAll(_query) {
    return new Promise((resolve, reject) => {
      console.log('getall method called')
      //console.log(userSchema)
      resourceSchema.resource_contact.findAndCountAll({})
        .then(users => {
          //console.log('all users are'+JSON.stringify(users))
          resolve(users)
        }, (error) => {
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }

  static createNew(request,r_id) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request
      resourceSchema.Resource.findById(_reqBody.resource_id).then(resource=>{
        if(!resource){
          reject('Resource Id is missing')
        }
        else{
          var a = Object.keys(resourceSchema.ResourceContact.rawAttributes)
          console.log("---->");
          console.log(a);
        //  console.log('!!!!'+r_id);
         // console.log("<--->>"+_reqBody.resource_id);

          //console.log(_reqBody.r_contact_type)
          var contact = {
            r_contact_type: _reqBody.r_contact_type,
            resource_id: resource.id,
            r_contact: _reqBody.r_contact
          }
          console.log('---contact:',JSON.stringify(contact))
          resourceSchema.ResourceContact.create(contact).then(resourceContact => {
            console.log('=====resourceContact: ',JSON.stringify(resourceContact));
            resolve(resourceContact)
          })
            .catch(error => {
              console.log(error)
              reject('Not Created ')

            })
        }

      })
    })

  }

  static removeById(_id) {
    return new Promise((resolve, reject) => {
      console.log('in dao')
      resourceSchema.resource_contact
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

   */
  static  getById(_id) {
      return new Promise((resolve, reject) => {
        console.log('getById Dao');


        // _id = '%'+_id+'%'
        resourceSchema.resource_contact
          .findAll({where: {$or: [{r_contact_type: _id}, {r_contact: _id}]}})
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

  static update(_reqBody, _id) {
    return new Promise((resolve, reject) => {
      resourceSchema.resource_contact
        .update({
            r_contact_type: _reqBody.r_contact_type,
            r_contact : _reqBody.r_contact
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
