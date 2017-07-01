import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {loginService} from "./login-service";
import {resourceService} from "../resource/resource-service"
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[loginService,resourceService]
})
export class LoginComponent implements OnInit {

  public complexForm : FormGroup;

  constructor(public localStorageService: LocalStorageService,private Routes:Router,public fb: FormBuilder,private loginservice : loginService,private resService : resourceService) {
    this.complexForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
        console.log('form changed to:', form);
      });
  }

  ngOnInit() {
  }
  /*if(value.username=='admin' && value.password=='admin'){
  this.Routes.navigate(['/home']);
}*/

  getAdmin(value)
  {
    console.log(value);
    this.resService.getResource(value.username).subscribe(users=>{
      console.log(users);
      //console.log(users.status)
      if(users.email == value.username && users.password == value.password && users.role == 'Admin'){
        console.log("trye");

       // alert("Succees");
        this.localStorageService.set("username",users.firstname);
        this.Routes.navigate(['/home']);
      }
      else{
        window.location.reload();
      }
    },(error)=>{
      alert("invalid userid & password")
      window.location.reload()
    })

  }
}
