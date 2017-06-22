import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {projectService} from '../../project/project-service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers :[projectService]
})
export class CreateProjectComponent implements OnInit {
  public complexForm : FormGroup;

  constructor(private fb: FormBuilder,private Router: Router,private proService : projectService) {
    this.complexForm = fb.group({
      'name' : [null, Validators.required],
      'description': [null,  Validators.required],
      'startdate' : [null, Validators.required],
      'enddate'    : [null,Validators.required]
    });
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {
  }
  addProject(value){
    this.proService.createProject(value).subscribe(users=>{
      console.log(users);
      alert("Successfully Created");
      this.Router.navigate(['/project'])
    });


    console.log(value);

  }


}
