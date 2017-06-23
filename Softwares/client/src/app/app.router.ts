import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ProjectComponent } from './project/project.component';
import { CreateResourceComponent } from './resource/create-resource/create-resource.component';
import { EditResourceComponent } from './resource/edit-resource/edit-resource.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ViewResourceComponent } from './resource/view-resource/view-resource.component';
export const rootRouterConfig: Routes =[
  {path:'',  redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path : 'resource/create', component : CreateResourceComponent},
  {path : 'project/create', component : CreateProjectComponent},
  {path : 'resource/:id/edit',component : EditResourceComponent},
  {path : 'project/:id/edit', component : EditProjectComponent},
  {path : 'resource/:id/view',component :ViewResourceComponent},
  {path :'project/:id/view', component: ViewProjectComponent},

  {path:'resource', component:ResourceComponent,
    children : [
      {path : 'create', component : CreateResourceComponent},
      {path : ':id/edit', component : EditResourceComponent}
      // {path : ':id/view', component : }
      ]
  },
  {path:'project',component: ProjectComponent,
    children:[
      {path : 'create', component : CreateProjectComponent},
      {path : ':id/edit', component : EditProjectComponent}
    ]}
]
