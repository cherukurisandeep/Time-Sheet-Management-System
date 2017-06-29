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
      'firstname' : [null, Validators.required],
      'lastname': [null,  Validators.required],
      'password' : [null, Validators.required],
      'email'    : [null,Validators.required],
      'dob' :[null,Validators.required],
      'joindate' :[null,Validators.required],
      'termdate'  :[null,Validators.required],
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

     alert("resoure created");
     this.createUser(value);

    });


    console.log(value);

  }
  createUser(value){
    let user = {
      "username" : value.fistname,
      "lastname" : value.lastname,
      "password" : value.password,
      "email"    : value.email,
      "dob"      : value.dob,
      "role"    : value.role
    }
    console.log(user);
    this.resService.createUser(user).subscribe(rest =>{
      console.log(rest);
      alert("Successfully Created");
      this.Router.navigate(['/resource'])
    })
  }
  emailCheck(email){
    console.log(email);
    this.resService.getResource(email).subscribe(sub=>{
      console.log(sub);
    })
  }

}
