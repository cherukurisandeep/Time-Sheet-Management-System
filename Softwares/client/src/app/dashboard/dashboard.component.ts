import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { TabsetComponent } from 'ngx-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  public dt: Date = new Date();
  public minDate: Date = void 0;
  public dateArray = [];
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: { date: Date, mode: string }[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  public weekFirstDay: Date;
  public weekLastDay: Date;
  private opened: boolean = false;

  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];


  }

  public getDate(): number {
    this.dateArray = []
    let temp = this.dt
    if (this.dt) {

      let currentdate: Date = temp;
      let weekStart = currentdate.getDate() - currentdate.getDay();
      let weekEnd = weekStart + 6;
      this.weekFirstDay = new Date(currentdate);
      let first = this.weekFirstDay.setDate(weekStart);
      this.weekLastDay = new Date(currentdate);
      let last = this.weekLastDay.setDate(weekEnd);
      /*console.log(new Date(first))
       console.log(new Date(last))*/
      let firtday = new Date(first)
      let lastday = new Date(last)
      ///*console.log(firtday + '<-->' + lastday)*/
      //this.dateArray.push(firtday);
      for (let i = 0; i <= 6; i++) {
        let day = weekStart + i
        let weekday = this.weekLastDay.setDate(day);
        let week = new Date(weekday)
        this.dateArray.push(week);
      }

    }
    //console.log(this.dt);
    //console.log(temp);
  //  /*console.log(this.dateArray)*/
    return this.dt && this.dt.getTime() || new Date().getTime();

  }
  getProject(value:any,updatedate:any){
    alert("Got it")
    alert(value);
    alert(updatedate);
  }

}

  // todo: implement custom class cases
  /*public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }

    return '';
  }*/

  /*public disabled(date: Date, mode: string): boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open(): void {
    this.opened = !this.opened;
  }

  public clear(): void {
    this.dt = void 0;
    this.dateDisabled = undefined;
  }

  public toggleMin(): void {
    this.dt = new Date(this.minDate.valueOf());
  }*/
