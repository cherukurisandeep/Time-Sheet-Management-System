import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {Router,ActivatedRoute} from '@angular/router';
import {projectService} from '../project/project-service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers :[projectService]
})
export class ProjectComponent implements OnInit {
  @ViewChild('deleteModel') public deleteModel:ModalDirective;
  public projects=[]

  constructor(private proService : projectService,private Router : Router) {
    this.getProjects()
  }
  getProjects(){
    this.proService.getAllProjects().subscribe(emp=>{
        console.log(typeof emp);
        console.log(emp)
        this.projects=(emp);
        console.log(this.projects)

    })

  }

  ngOnInit() {
  }
  editProject(id){
    this.Router.navigate(['project/'+id+'/edit']);
  }
  deleteProject(id){
    this.proService.deleteProject(id).subscribe(emp=>{
      if(emp.status === 200 ) {
        this.getProjects();
        this.deleteModel.hide();
      }
      else{
        alert("server Error");
        this.deleteModel.hide();
      }

    });
  }

  viewProject(id){
    this.Router.navigate(['project/'+id+'/view']);
  }


}
