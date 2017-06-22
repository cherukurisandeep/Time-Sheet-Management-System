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
export class resourceService{
  constructor(private http: Http,private queryApi : QueryApi){

  }
  createResource(params): Observable <any>  {
    //const requestOptions = RequestUtils.getRequestOptions(params);
    //alert(params.username);
    alert(params);
    return this.queryApi.doPost('Resource', params)
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });

  }
  getAllResources(): Observable<any>{
    let req
    return this.queryApi.doGet('Resource',req)
      .map((res:Response)=>{
      console.log(res.json());
      return res.json();
      })
      .catch((error :any)=>{
        return Observable.throw(error.json().error || "server error")
      })
  }
  deleteResource(params): Observable<any>{
    return this.queryApi.doDelete('ActionResource',params)
      .map((res:Response)=>{
      return res;
      })
      .catch((error : any)=>{
        return Observable.throw(error|| "server error")
      })
  }
  getResource(params): Observable<any>{
    return this.queryApi.doGet('ActionResource',params)
      .map((res:Response)=>{
      return res.json();
      })
      .catch((error: any)=>{
      return Observable.throw( error|| 'server error')
      })
  }
  updateResource(params): Observable<any>{
    return this.queryApi.doPut('ActionResource',params)
      .map((res:Response)=>{
      return res
    })
      .catch((error : any)=>{
      return Observable.throw(error || 'server error')
      })
  }


}
