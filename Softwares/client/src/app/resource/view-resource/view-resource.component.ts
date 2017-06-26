import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {resourceService} from '../resource-service';

@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.css'],
  providers :[resourceService]
})
export class ViewResourceComponent implements OnInit {
  public resourceId;
  public paramsId;
  public resource;

  constructor(private resService :resourceService ,private Router: Router,private router:ActivatedRoute) {
    this.paramsId = this.router.params.subscribe(params => {
      this.resourceId = +params['id'];
      alert("<1111111----->"+this.resourceId);
    });
    this.getResource(this.resourceId);
  }

  ngOnInit() {
  }
  getResource(id){
    this.resService.getResource(id).subscribe(emp=>{
      console.log(typeof emp);
      console.log(emp);
      this.resource=(emp);
      // alert("service")
      console.log(this.resource);
      console.log(this.resource[0].fistname)
    })
  }
  editPage(){
    this.Router.navigate(['resource/'+this.resourceId+'/edit']);
  }
  ResourcePage(){
    this.Router.navigate(['/resource']);
  }

}
