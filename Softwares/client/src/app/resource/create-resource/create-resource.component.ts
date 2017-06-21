import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {resourceService} from '../../resource/resource-service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css'],
  providers:[resourceService]
})
export class CreateResourceComponent implements OnInit {
  public complexForm : FormGroup;
  constructor(private fb: FormBuilder,private resService : resourceService,private Router: Router) {
    this.complexForm = fb.group({
      'fistname' : [null, Validators.required],
      'lastname': [null,  Validators.required],
      'password' : [null, Validators.required],
      'email'    : [null,Validators.required],
      'dob' :[null,Validators.required],
      'joindate' :[null,Validators.required],
      'enddate'  :[null,Validators.required],
      'role'  : [null,Validators.required]
    });
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {
  }
  addResource(value){
    this.resService.createResource(value).subscribe(users=>{
      console.log(users);
      alert("Successfully Created");
      this.Router.navigate(['/resource'])
    });


    console.log(value);

  }

}
