import {Injectable} from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {QueryApi} from '../commonservice/request/QueryApi';
import {retry} from "rxjs/operator/retry";

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
  getTimeSheetEntries(params):Observable<any>{
    return this.queryApi.doGet('ActionTimeSheetEntery',params)
      .map((res : Response)=>{
      return res.json()
      })
      .catch((error:any)=>{
      return Observable.throw(error.json().error || 'Server error in GetTimeSheetEnteryID')
      })
  }
  createTimeSheetEntries(params):Observable<any>{
    alert('came to create')
    return this.queryApi.doPost('TimeSheetEntery',params)
      .map((res : Response)=>{
      return res.json()
      })
      .catch((error:any)=>{
      return Observable.throw(error.json().error || 'Server Errro in Create')
      })
  }
  UpdateTimeSheetEnteries(params):Observable<any>{
    return this.queryApi.doPut('TimeSheetEntery',params)
      .map((res:Response)=>{
      return res.json()
      })
      .catch((error:any)=>{
      return Observable.throw(error.json().error || 'Server Error in Update')
      })
  }
}
