import { Component, OnInit } from '@angular/core';
import {projectService} from '../project/project-service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers :[projectService]
})
export class ProjectComponent implements OnInit {
  public projects=[]

  constructor(private proService : projectService) {
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

  }

}
