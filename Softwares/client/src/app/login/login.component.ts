import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {loginService} from "./login-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[loginService]
})
export class LoginComponent implements OnInit {

  public complexForm : FormGroup;

  constructor(private Routes:Router,public fb: FormBuilder,private loginservice : loginService) {
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
    this.loginservice.getUsers(value.username).subscribe(users=>{
      console.log(users);
      if(users.username == value.username && users.password == value.password){
        console.log("trye");
        alert("Succees");
        this.Routes.navigate(['/home']);
      }
    })

  }
/*  loadClient(query) {
    this.searchQuery = query;
    this.loginservice.getUsers(query).subscribe(clients => {
      this.clientData = clients.data.items;
      this.totalItems = clients.totalItems;

    });
  }*/
}
