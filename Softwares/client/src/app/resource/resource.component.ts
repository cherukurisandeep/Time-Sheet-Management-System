import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {resourceService} from '../resource/resource-service'

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
  providers :[resourceService]
})
export class ResourceComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  public complexForm : FormGroup;

  constructor(private fb: FormBuilder,private resService : resourceService) {
    this.complexForm = fb.group({
      'fistname' : [null, Validators.required],
      'lastname': [null,  Validators.required],
      'password' : [null, Validators.required],
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
     alert("Successfully Created")
   })

    console.log(value);

  }

}
