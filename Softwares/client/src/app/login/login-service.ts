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
export class loginService{
  constructor(private http: Http,private queryApi : QueryApi){

  }
  getUsers(params): Observable <any>  {
    //const requestOptions = RequestUtils.getRequestOptions(params);
    //alert(params.username);
    alert(params.username);
    return this.queryApi.doGet('Login', params)
      .map((res: Response) => {
      //alert("hello")
      console.log(res.json());
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });

  }
}
