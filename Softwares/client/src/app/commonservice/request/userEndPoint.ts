import { environment } from './../../../environments/environment';
import {retry} from "rxjs/operator/retry";
export const USERS ='USERS'
export const USEREDIT = 'USEREDIT'
export const Resource ='Resource'
export const ActionResource = 'ActionResource'
export const Project ='Project'
export const ActionProject = 'ActionProject'
export const Ass = 'Ass'
export const CreateAss = 'CreateAss'
export const UserEndPoint = (type:string,params:any)=>{
  switch(type){
    case Ass :
      return environment.API_ROOT + '/tsms/assosiate/' +params;
    case CreateAss :
      alert("hi")
      return environment.API_ROOT + '/tsms/assosiate';
    case USERS:
      return environment.API_ROOT + '/tsms/user/' +params ;
    case USEREDIT:
      alert("USEREDIT")
      return environment.API_ROOT + '/tsms/user';
    case Resource:
      return environment.API_ROOT + '/tsms/resource';
    case Project:
      return environment.API_ROOT + '/tsms/project';
    case ActionResource:
      let ActionRes=environment.API_ROOT + '/tsms/resource';
      if ( params.hasOwnProperty('id') ) {
        alert("hey");
        ActionRes += '/' + params.id;
      }
      else{
        return environment.API_ROOT + '/tsms/resource/' + params
      }
      return ActionRes;


    case ActionProject:
      let ActionPro = environment.API_ROOT +'/tsms/project';
      if( params.hasOwnProperty('id')){
        ActionPro +='/'+ params.id;
      }
      //alert(params + "<---->" + type);
      else{
        return environment.API_ROOT + '/tsms/project/'+params;
      }
      return ActionPro;

  }

}
export const EditEndPoint = (type:string,params:any,body:any)=>{
  switch(type){
    case ActionResource :
      return environment.API_ROOT + '/tsms/resource/' +params
  }
}
