import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {projectService} from '../project-service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers :[projectService]
})
export class ViewProjectComponent implements OnInit {
  public projectId;
  public paramsId;
  public project;
  constructor(public router: ActivatedRoute,public Router:Router, public proService : projectService) {
    this.paramsId = this.router.params.subscribe(params => {
      this.projectId = +params['id'];
      alert("<1111111----->"+this.projectId);
    });
    this.getProject(this.projectId);
  }

  ngOnInit() {
  }
  getProject(id){
    this.proService.getProject(id).subscribe(emp=>{
      // console.log(typeof emp);
      console.log(emp);
      this.project=(emp);
      // alert("service")
      console.log(this.project);
    })
  }
  projectPage(){
    this.Router.navigate(['/project'])
  }
  editPage(){
    this.Router.navigate(['project/'+this.projectId+'/edit']);
  }
}
