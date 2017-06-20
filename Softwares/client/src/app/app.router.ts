import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ProjectComponent } from './project/project.component';
export const rootRouterConfig: Routes =[
  {path:'',  redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'resource', component:ResourceComponent},
  {path:'project',component: ProjectComponent}
]
