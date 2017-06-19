//import mongoose from 'mongoose';
import Promise from 'bluebird';
import userSchema from '../../../models';
import _ from 'lodash';



export default class User{
  static getAll(_query){
    return new Promise((resolve,reject)=>{
      console.log('getall method called')
      //console.log(userSchema)
      userSchema.Userlogin.findAndCountAll({})
        .then(users=>{
          //console.log('all users are'+JSON.stringify(users))
          resolve(users)
        },(error)=>{
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request
      console.log(_reqBody.username)
      userSchema.Userlogin.create({
        username:_reqBody.username,
        password: _reqBody.password,
        type: _reqBody.type
      }).then(users=>{
        resolve(users)
      })
        .catch(error=>{
          reject('Not Created ')

        })
    })

  }
  static removeById(_id){
    return new Promise((resolve, reject) => {
      console.log('in dao')
      userSchema.Userlogin
        .findById(_id)
        .then(user => {
          if (!user) {
            return reject(404);
          }
          return user
            .destroy()
            .then(() => { resolve(204); }, (error) => reject(error));
        }, (error) => {
          reject(error);
        });
    });

  }
  /*
   .find({where:{id : _id }} || { where : {username : _id}})

   */
  static  getById(_id){
    return new Promise((resolve,reject)=>{
      console.log('getById Dao');
    /* if(typeof(_id) === Number){
        console.log('Number<---------->')
      }*/
      userSchema.Userlogin
        .find({where:{$or:[{username : _id} , {type : _id},{createdAt : _id}]}})
        .then((users)=>{
        if(!users){
          return reject(404)
        }
        else{
          return resolve(users)
        }
        },(error)=>{
          reject(error)
        })

    })
  }
  static update(_reqBody,_id){
    return new Promise((resolve,reject)=>{
      userSchema.Userlogin
        .update({
          username : _reqBody.username,
          password : _reqBody.password
        },
          {where: {id: _id}, returning : true, plain : true })
        .then((users)=>{
        resolve(users)
        }, (error)=>{
        reject(error)
        })
    })
  }
}
