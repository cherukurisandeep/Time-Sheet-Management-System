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
        console.log(res.json());
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
}
