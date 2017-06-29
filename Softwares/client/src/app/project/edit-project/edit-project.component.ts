import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {projectService} from '../project-service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers :[projectService]
})
export class EditProjectComponent implements OnInit {
  public projectId;
  public paramsId;
  public project;
  public complexForm : FormGroup;


  constructor(public router: ActivatedRoute,private fb: FormBuilder,private proService : projectService, public Router:Router) {
    this.paramsId = this.router.params.subscribe(params => {
      this.projectId = +params['id'];
      //alert("<1111111----->"+this.projectId);
    });
    this.getProject(this.projectId);
    this.complexForm = fb.group({
      'id'   : ['',Validators.required],
      'name' : ['', Validators.required],
      'description': ['',  Validators.required],
      'startdate' : ['', Validators.required],
      'enddate'    : ['',Validators.required]
    });
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      }
    );

  }

  ngOnInit() {
  }
  editProject(value){
    console.log(value);
    this.proService.updateProject(value).subscribe(resupdate=>{
      alert(resupdate.status);
      this.Router.navigate(['/project']);
    })
  }

  getProject(id){
    this.proService.getProject(id).subscribe(emp=>{
     // console.log(typeof emp);
      console.log(emp);
      this.project=(emp);
      // alert("service")
      console.log(this.project);
      this.complexForm = this.fb.group({
        'id'        :[this.project.id, Validators],
        'name'      : [this.project.name,Validators.required],
        'description' : [this.project.description, Validators.required],
        'startdate': [this.project.startdate,  Validators.required],
        'enddate' : [this.project.enddate, Validators.required],
      });
    })
  }

}
