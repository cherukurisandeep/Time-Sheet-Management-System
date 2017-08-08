import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import {loginService} from "./login-service";
import {QueryApi} from '../commonservice/request/QueryApi';
import {resourceService} from "../resource/resource-service";
import { LocalStorageService } from 'angular-2-local-storage';
import {rootRouterConfig} from '../app.router';
import {MockBackend} from "@angular/http/testing";
import {Http, HttpModule, RequestOptions, ResponseOptions, XHRBackend} from "@angular/http";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations : [LoginComponent],
  imports: [ReactiveFormsModule,
    CommonModule,
    rootRouterConfig
  ],
  providers : [QueryApi,resourceService,LocalStorageService,loginService,Router,
    {provide : XHRBackend , useClass : MockBackend},
    {provide : APP_BASE_HREF , useValue : '/'}],
  exports:[loginModule]
})
export class loginModule {
  constructor(public login: LoginComponent){
  }
}

