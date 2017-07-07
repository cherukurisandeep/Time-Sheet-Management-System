import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username:any

  constructor(public localStorageService: LocalStorageService,public router :Router  ) {
    this.username=this.localStorageService.get('username');
    if(this.username == null){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }
  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login'])
  }

}
