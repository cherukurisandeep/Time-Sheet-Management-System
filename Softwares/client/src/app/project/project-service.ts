import {Injectable} from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {QueryApi} from '../commonservice/request/QueryApi';
import {RequestUtils} from '../commonservice/request/requestUtils'
import {_catch} from "rxjs/operator/catch";
@Injectable()
export class projectService{
  constructor(private http: Http,private queryApi : QueryApi){

  }
  createProject(params): Observable <any>  {
    //const requestOptions = RequestUtils.getRequestOptions(params);
    //alert(params.username);
    alert(params);
    return this.queryApi.doPost('Project', params)
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });

  }
  getAllProjects(): Observable<any>{
    let req
    return this.queryApi.doGet('Project',req)
      .map((res:Response)=>{
       // console.log(res.json());
        return res.json();
      })
      .catch((error :any)=>{
        return Observable.throw(error.json().error || "server error")
      })
  }
  deleteProject(params):Observable<any>{
    return this.queryApi.doDelete('ActionProject',params)
      .map((res: Response)=>{
      return res;
      })
      .catch((error : any)=>{
      return Observable.throw(error|| "server error")
      })
  }
  getProject(params):Observable<any>{
    return this.queryApi.doGet('ActionProject',params)
      .map((res:Response)=>{
      return res.json();
      })
      .catch(( error :any)=>{
      return Observable.throw(error || "server error")

      })
  }
  updateProject(params):Observable<any>{
    return this.queryApi.doPut('ActionProject',params)
      .map((res:Response)=>{
        return res
      })
      .catch((error : any)=>{
        return Observable.throw(error || 'server error')
      })
  }
  getAssosiatedData(id) : Observable<any>{
    let req
    return this.queryApi.doGet('Ass',id)
      .map((res:Response)=>{
      return res.json()
    })
      .catch((error : any)=>{
      return Observable.throw(error || 'server error')
      })
  }
  createAssosiation(params) : Observable<any>{
    return this.queryApi.doPost('CreateAss',params)
      .map((res : Response)=>{
      return res.json()
      })
      .catch((error : any)=>{
      return Observable.throw(error || 'Server error')
      })
  }
  deleteAssosiation(params): Observable<any>{
    return this.queryApi.doDelete("DeleteAss",params)
      .map((res : Response)=>{
      return res
      })
      .catch((error :any)=>{
      return Observable.throw(error || "Server error")
      })

  }
  ResourceAssosiation(params): Observable<any>{
    return this.queryApi.doGet("ResourceAss",params)
      .map((res : Response)=>{
      return res.json()
      })
      .catch((error: any)=>{
      return Observable.throw(error || "Resource Ass Server Error")
      })
  }
}
