import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ProjectComponent } from './project/project.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {SelectModule} from 'ng2-select';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import {QueryApi} from './commonservice/request/QueryApi' ;
import {RequestUtils} from './commonservice/request/requestUtils';
import { ActionheaderComponent } from './actionheader/actionheader.component';
import { CreateResourceComponent } from './resource/create-resource/create-resource.component';
import { EditResourceComponent } from './resource/edit-resource/edit-resource.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { MomentModule } from 'angular2-moment';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ViewResourceComponent } from './resource/view-resource/view-resource.component';
import {MdAutocompleteModule} from '@angular/material';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ResourceComponent,
    ProjectComponent,
    ActionheaderComponent,
    CreateResourceComponent,
    EditResourceComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ViewProjectComponent,
    ViewResourceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ReactiveFormsModule,
    SelectModule,
    MomentModule,
    MdAutocompleteModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'}),
  ],
  providers: [QueryApi,RequestUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
