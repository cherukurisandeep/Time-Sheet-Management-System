import { environment } from './../../../environments/environment';
export const USERS ='USERS'
export const Resource ='Resource'
export const UserEndPoint = (type:string,params:any)=>{
  switch(type){
    case USERS:
      console.log(params)
      return environment.API_ROOT + '/tsms/user/' +params ;
    case Resource:
      return environment.API_ROOT + '/tsms/resource';

  }

}
