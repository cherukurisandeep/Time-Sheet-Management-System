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
export class timeSheetService{
  constructor(private http: Http,private queryApi : QueryApi){

  }
  createTimeSheet(params): Observable<any>{
    console.log("Sandeep",params);
    return this.queryApi.doPost('TimeSheet',params)
      .map((res : Response)=>{
        return res.json()
      })
      .catch((error: any) =>{
        return Observable.throw(error.json().error || 'Server error in TimeSheet Creation');
      })
  }
  getAllTimeSheets():Observable<any>{
   // alert('getAll')
    let params;
    return this.queryApi.doGet('TimeSheet',params)
      .map((res: Response)=>{
        return res.json()
      })
      .catch((error : any)=>{
      return Observable.throw(error.json().error || 'Server Error')
      })
  }
  getTimeSheet(params):Observable<any>{
  //  alert(params)
    return this.queryApi.doGet('ActionTimeSheet',params)
      .map((res: Response)=>{
      return res.json()
      })
      .catch((error: any)=>{
      return Observable.throw(error.json().error || 'Server Error')
      })
  }
}
