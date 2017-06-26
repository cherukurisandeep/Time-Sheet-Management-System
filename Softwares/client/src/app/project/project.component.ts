import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {Router,ActivatedRoute} from '@angular/router';
import {projectService} from '../project/project-service';
import {SelectComponent} from 'ng2-select';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers :[projectService]
})
export class ProjectComponent implements OnInit {
  @ViewChild('ng') public ngSelect :SelectComponent;
  @ViewChild('deleteModel') public deleteModel:ModalDirective;
  public projects=[];
  public Projectname = [] ;
  public pro =[];
  public x;

  constructor(private proService : projectService,private Router : Router) {
    this.getProjects()
  }
  getProjects(){
    this.proService.getAllProjects().subscribe(emp=>{
        console.log(typeof emp);
        console.log(emp)
        this.projects=(emp);
        console.log(this.projects);
        for (let i in this.projects){
          //this.x = this.projects[i].name;
         // console.log(this.x);
          this.Projectname.push(this.projects[i].name);
        }
      this.ngSelect.items=this.Projectname;

    })


  }

  ngOnInit() {
    this.pro = this.Projectname;
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
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
    console.log(this.Projectname);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}



