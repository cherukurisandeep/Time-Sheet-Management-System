import { Component, OnInit,EventEmitter, Input , Output,ViewChild } from '@angular/core';
import {any} from "codelyzer/util/function";
import {projectService} from '../../project/project-service';
import {SelectComponent} from 'ng2-select';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-time-sheet-data',
  templateUrl: './time-sheet-data.component.html',
  styleUrls: ['./time-sheet-data.component.css'],
  providers:[projectService]
})
export class TimeSheetDataComponent implements OnInit {
  public username:any;
  @Input() ProjectsSearch:any;
  @Output() getSelectedProject = new EventEmitter();
  @ViewChild('ng') public ngSelect :SelectComponent;
  public ProjectList=[];
  constructor(public proService : projectService,public localStorageService: LocalStorageService) {
    this.username=this.localStorageService.get('username');
    this.getProjects();
  }

  ngOnInit() {
  }
  getProjects(){
    // this.proService.getAllProjects().subscribe(projects=>{
    //  // console.log(projects);
    //   for(let i =0;i<projects.length;i++){
    //     let obj={
    //       id : projects[i].id,
    //       text : projects[i].name
    //     }
    //    // console.log(obj);
    //     this.ProjectList.push(obj);
    //   }
    //   //console.log(this.ProjectList)
    //   this.ngSelect.items=this.ProjectList;
    // })
    this.proService.ResourceAssosiation(this.username.id).subscribe(project=>{
      console.log("new",project)
      for(let i =0;i<project.length;i++){
        let obj = {
          id : project[i].projects.id,
          text : project[i].projects.name
        }
        this.ProjectList.push(obj);
      }
      this.ngSelect.items=this.ProjectList;
    })
  }


  private value:any = ['Athens'];
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
    this.getSelectedProject.emit(value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }

}
