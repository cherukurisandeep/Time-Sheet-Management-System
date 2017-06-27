//import mongoose from 'mongoose';
import Promise from 'bluebird';
import userSchema from '../../../models';
import _ from 'lodash';



export default class User{
  static getAll(_query){
    return new Promise((resolve,reject)=>{
      console.log('getall in users method called')
      //console.log(userSchema)
      userSchema.userlogin.findAndCountAll({})
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
      console.log('<-----users dao---->')
      let _reqBody = request
      console.log(_reqBody.username)
      userSchema.userlogin.create({
        username:_reqBody.username,
        lastname:_reqBody.lastname,
        password: _reqBody.password,
        email: _reqBody.email,
        dob : _reqBody.dob,
        role : _reqBody.role
      }).then(users=>{
        resolve(users)
      })
        .catch(error=>{
          reject('Not Created')

        })
    })

  }
  static removeById(_id){
    return new Promise((resolve, reject) => {
      console.log('in dao')
      userSchema.userlogin
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
    console.log("DAO")
    return new Promise((resolve,reject)=>{
      console.log('getById Dao');
    /* if(typeof(_id) === Number){
        console.log('Number<---------->')
      }*/
      userSchema.userlogin
        .find({where:{$or:[{username : _id} , {role : _id}]}})
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
      userSchema.userlogin
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
