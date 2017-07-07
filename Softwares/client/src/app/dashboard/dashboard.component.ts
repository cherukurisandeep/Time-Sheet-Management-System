import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { TabsetComponent } from 'ngx-bootstrap';
import {FormControl} from '@angular/forms';
import {timeSheetService} from '../dashboard/timeSheet-service'
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [timeSheetService]
})
export class DashboardComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  public username:any
  public Sheets=[]
  public timeSheetArray = [];
  public hours= 0
  public timeSheetId;
  public timeSheetObject={};
  public dt: Date = new Date();
  public minDate: Date = void 0;
  public dateArray = [];
  public events: any[];
  public day1 = 0;
  public day2 = 0;
  public day3 = 0;
  public day4 = 0;
  public day5 = 0;
  public day6 = 0;
  public day7 = 0;
  public tomorrow: Date;
  public firtday:Date;
  public lastday:Date;
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
  public sampleTimeSheetEntry = [];
  public constructor(public timeService : timeSheetService, public localStorageService: LocalStorageService) {
    this.username=this.localStorageService.get('username');
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
    this.getDate()
    //this.createTimeSheetList()
    this.getAllTimeSheets()
    this.ActionTimeSheet()
  }
  ActionTimeSheet(){
    let flag=0
    //alert(this.username.id)
    this.timeService.getTimeSheet(this.username.id).subscribe(sheets=>{
      console.log("Sandeep123",sheets);
      let st:Date
        st= new Date(sheets[0].startdate)
      let et :Date
        et= new Date(sheets[0].enddate)
     // alert(st)
      if(st.getTime() == this.firtday.getTime()){
        alert('hello');
      }

      alert(sheets[0].startdate);
      alert(this.firtday)
      for(let i=0;i<sheets.length;i++){
        if (sheets[i].resource_id==this.username.id && sheets[i].startdate==this.firtday && sheets[i].enddate==this.lastday){
          this.timeSheetId=sheets.id
          this.createTimeSheetList()
          flag=1;
          alert("hello");
        }
      }
      //console.log('byId',sheets)
      if(flag==0){
        let obj = {
          resource_id : this.username.id,
          startdate : this.firtday,
          enddate : this.lastday,
        }
        let t_st=[];
        t_st.push(obj)
        this.timeService.createTimeSheet(t_st).subscribe(result=>{
          console.log('Inserted in Time Sheet')

          this.ActionTimeSheet()
        })
      }

    })
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
       this.firtday = new Date(first)
      this.lastday = new Date(last)
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
  createTimeSheetList(){
    for(let i = 0;i<7;i++){
      let obj={
        project_id : null,
        t_id       : this.timeSheetId,
        time_date : this.dateArray[i],
        hours : 0
      }
      this.sampleTimeSheetEntry.push(obj)
    }
    console.log("sample",this.sampleTimeSheetEntry)
  }
  getProject(value:any,updatedate:any){
    for(let i =0;i<this.sampleTimeSheetEntry.length;i++){
      if(this.sampleTimeSheetEntry[i].time_date.getTime()==updatedate.getTime()){
        this.sampleTimeSheetEntry[i].project_id = value.id
      }
    }
  }
  saveTimeSheet(){
    alert(this.day1);
    for(let i =0 ; i< this.sampleTimeSheetEntry.length;i++){
      //alert(this.timeSheetArray[0].time_date.getTime());
      //(this.dateArray[0].getTime())

      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[0].getTime()){
        alert("got it");
        this.sampleTimeSheetEntry[i].hours = this.day1
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[1].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day2
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[2].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day3
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[3].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day4
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[4].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day5
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[5].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day6
      }
      if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[6].getTime()){
        this.sampleTimeSheetEntry[i].hours = this.day7
      }
      //console.log(i)
    }
    alert("Came to Save");
    console.log(this.sampleTimeSheetEntry);
  }
  getAllTimeSheets(){
    this.timeService.getAllTimeSheets().subscribe(time=>{
      console.log(time)
      this.Sheets = time
      console.log('sheets',this.Sheets)
    })
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
