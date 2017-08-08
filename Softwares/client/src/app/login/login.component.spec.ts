import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginComponent } from './login.component';
import {RouterModule,Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import {loginService} from "./login-service";
import {QueryApi} from '../commonservice/request/QueryApi';
import {resourceService} from "../resource/resource-service";
import {loginModule} from "./login.module";
import {MockBackend} from "@angular/http/testing";
import {APP_BASE_HREF} from "@angular/common";
import {Http, HttpModule, RequestOptions, ResponseOptions,ConnectionBackend, XHRBackend,} from "@angular/http";
import {rootRouterConfig} from '../app.router';
import { LocalStorageService,ILocalStorageServiceConfig } from 'angular-2-local-storage';
import {routing} from '../app.router';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    let localStorageServiceConfig: ILocalStorageServiceConfig = {}
    TestBed.configureTestingModule({
      declarations : [LoginComponent],
      schemas :[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports :[HttpModule, rootRouterConfig],
      providers : [loginService,resourceService,LocalStorageService,QueryApi,Http, ConnectionBackend ,RequestOptions,ResponseOptions,
        Http,
        {provide: XHRBackend, useClass: MockBackend},
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: RouterModule,useValue : rootRouterConfig},
        {provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: localStorageServiceConfig}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    //component.getAdmin(value)
    expect(component).toBeTruthy()
    //component.getAdd();
  });
});
