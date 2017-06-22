import { environment } from './../../../environments/environment';
export const USERS ='USERS'
export const Resource ='Resource'
export const ActionResource = 'ActionResource'
export const Project ='Project'
export const ActionProject = 'ActionProject'
export const UserEndPoint = (type:string,params:any)=>{
  switch(type){
    case USERS:

      return environment.API_ROOT + '/tsms/user/' +params ;
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
      alert(params + "<---->" + type);
      return environment.API_ROOT + '/tsms/project/'+params;

  }

}
export const EditEndPoint = (type:string,params:any,body:any)=>{
  switch(type){
    case ActionResource :
      return environment.API_ROOT + '/tsms/resource/' +params
  }
}
