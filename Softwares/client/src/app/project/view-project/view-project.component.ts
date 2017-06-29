import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {projectService} from '../project-service';
import {SelectComponent} from 'ng2-select';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers :[projectService]
})
export class ViewProjectComponent implements OnInit {
  get selected(): (value: string) => void {
    return this._selected;
  }
  @ViewChild('ng') public ngSelect :SelectComponent;
  public projectId;
  public paramsId;
  public project;
  public arry=['sandeep','hello','how', 'king'];
  constructor(public router: ActivatedRoute,public Router:Router, public proService : projectService) {
    this.paramsId = this.router.params.subscribe(params => {
      this.projectId = +params['id'];
      //alert("<1111111----->"+this.projectId);
    });
    this.getProject(this.projectId);
    this.assosiatedData();
  }

  ngOnInit() {
  }
  assosiatedData(){
    this.proService.getAssosiatedData().subscribe(assosiation =>{
      //alert(assosiation)
      console.log(assosiation);
    })
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
  public value:any;
  private _selected=(value:string):void=> {
    let count=0;
    console.log('My', value);
    this.ngSelect.active =[];
    this.ngSelect.items=this.arry;
  };

  public removed(value:string):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:string):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:string):void {
    this.value = value;
    console.log(value);
  }
}
