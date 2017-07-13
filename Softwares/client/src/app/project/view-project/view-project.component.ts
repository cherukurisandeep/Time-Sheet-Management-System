import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import {projectService} from '../project-service';
import {SelectComponent} from 'ng2-select';
import {resourceService} from '../../resource/resource-service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers :[projectService,resourceService]
})
export class ViewProjectComponent implements OnInit {
  get selected(): (value: string) => void {
    return this._selected;
  }
  @ViewChild('ng') public ngSelect :SelectComponent;
  @ViewChild('deleteModel') public deleteModel:ModalDirective;

  public projectId;
  public paramsId;
  public project;
  public projectResource;
  public resourceAssosiated = []
  public resources=[];
 // public arry=['sandeep','hello','how', 'king'];
  constructor(public router: ActivatedRoute,public Router:Router, public proService : projectService, public resService : resourceService) {
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
    this.resourceAssosiated = []
    this.proService.getAssosiatedData(this.projectId).subscribe(assosiation =>{
      //alert(assosiation)
      console.log("gotit",assosiation);
      this.projectResource = assosiation;
      this.getAllResource();


    })
  }
  getAssosiatedResource(){
    this.resourceAssosiated=[]
    for ( let i in this.projectResource){
      for(let j in this.resources){
        if(this.resources[j].id == this.projectResource[i].resource_id){
          let obj={
            id : this.projectResource[i].resource_id,
            name : this.resources[j].text
          }
          this.resourceAssosiated.push(obj)
        }
      }
      console.log("my data",this.resourceAssosiated)
    }
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
  getAllResource(){
    this.resources = [];
    this.resService.getAllResources().subscribe(res=>{
      console.log(res);
      //this.resources = res;
      for(let i in res){
        let obj = {
          id : res[i].id,
          text : res[i].firstname + ' ' + res[i].lastname
        }
        this.resources.push(obj);
        //this.ngSelect.items=this.resources;
      }
      this.ngSelect.items=this.resources;
      console.log('res',res);
      this.getAssosiatedResource()
    })


  }

  projectPage(){
    this.Router.navigate(['/project'])
  }
  editPage(){
    this.Router.navigate(['project/'+this.projectId+'/edit']);
  }
  public value:any;
  private _selected=(value):void=> {
    let flag=0;
    for(let i=0;i<this.projectResource.length;i++){
      alert(this.projectResource[i].project_id)
      if(this.projectResource[i].project_id==this.projectId && this.projectResource[i].resource_id==value.id){
        alert("Assosiation already exist");
        flag=1;
      }
    }
    if(flag==0){
      this.value =value
      let count=0;
      console.log('My', value);
      let obj ={
        project_id : this.projectId,
        resource_id : value.id
      }
      console.log("<<<<--->",value.id)
      this.proService.createAssosiation(obj).subscribe(result=>{
        console.log(result);
        alert("inserted");
        this.ngSelect.active =[];
        this.ngSelect.items=this.resources;
        this.assosiatedData();
      })
    }

  };

  public removed(value:string):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:string):void {
    console.log('New search input: ', value);
    console.log(this.resources)
  }

  public refreshValue(value:string):void {
    this.value = value;
    console.log(value);
  }
  deleteAssosiation(id){

    alert("close");
    let obj={
      p_id : this.projectId,
      r_id : id
    }

    this.proService.deleteAssosiation(obj).subscribe(result=>{
      console.log(result)
      this.deleteModel.hide();
      //alert("hi");
      this.assosiatedData();

    })
  }
}
