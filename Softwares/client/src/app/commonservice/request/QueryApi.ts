import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {UserEndPoint} from './../../commonservice/request/userEndPoint';
@Injectable()
export class QueryApi{
  constructor(private http : Http){

  }
  doGet(url: any, params: any) {
    alert(params +'==>' + url)
    url = UserEndPoint(url, params);
    return this.http.get(url, params );
  }
  doPost(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.post(url, params );
  }

  doDelete(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.delete(url, params);
  }
  doPut(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.put(url, params);
  }
}
