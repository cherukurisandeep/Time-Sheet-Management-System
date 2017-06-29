import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {resourceService} from '../../resource/resource-service';
import {resource} from "selenium-webdriver/http";

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css'],
  providers : [resourceService]
})
export class EditResourceComponent implements OnInit {
  public paramsId;
  public uservalue;
  public resource;
  public complexForm : FormGroup;


  constructor(public router: ActivatedRoute,private fb: FormBuilder,private resService : resourceService, public Router:Router) {

    this.paramsId = this.router.params.subscribe(params => {
      this.uservalue = +params['id'];
    //  alert(this.uservalue);
    });
    this.getResource(this.uservalue);
    this.complexForm = fb.group({
      'id'      : ['',Validators.required],
      'fistname' : ['', Validators.required],
      'lastname': ['',  Validators.required],
      'password' : ['', Validators.required],
      'email'    : ['',Validators.required],
      'dob' :['',Validators.required],
      'joindate' :['',Validators.required],
      'enddate'  :['',Validators.required],
      'role'  : ['',Validators.required]
    });
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {


  }
  getResource(id){
   // alert('getREso')
    this.resService.getResource(id).subscribe(emp=>{
      console.log(typeof emp);
      console.log(emp);
      this.resource=(emp);
     // alert("service")
      console.log(this.resource);
      this.complexForm = this.fb.group({
        'id'      : [this.resource[0].id,Validators.required],
        'fistname' : [this.resource[0].fistname, Validators.required],
        'lastname': [this.resource[0].lastname,  Validators.required],
        'password' : [this.resource[0].password, Validators.required],
        'email'    : [this.resource[0].email,Validators.required],
        'dob' :[this.resource[0].dob,Validators.required],
        'joindate' :[this.resource[0].joindate,Validators.required],
        'enddate'  :[this.resource[0].termdate,Validators.required],
        'role'  : [this.resource[0].role,Validators.required]
      });
    })

  }
  updateResource(value){
    console.log(value);
    this.resService.updateResource(value).subscribe(resupdate=>{
      alert(resupdate.status);
      this.Router.navigate(['/resource']);
    })
  }

}
