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
  public totalhours=0;
  public dataTableArray;
  public ProjectsSearch:any =[]
  public username:any
  public Sheets=[]
  public timeSheetEntryArray = [];
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
    this.timeService.getTimeSheet(this.username.id).subscribe(sheets=>{
      console.log("Sandeep123",sheets);
      for(let i=0;i<sheets.length;i++){
        if (sheets[i].resource_id==this.username.id && new Date(sheets[i].startdate).getTime()==this.firtday.getTime() && new Date(sheets[i].enddate).getTime()==this.lastday.getTime()){
          this.timeSheetId=sheets[i].id;
         //alert(this.timeSheetId);
          this.timeService.getTimeSheetEntries(this.timeSheetId).subscribe(result=>{
            console.log("rsult",result);
            if(result.length==0)
            {
              this.createTimeSheetList()
            }
            else{

              this.timeSheetEntryArray = result
              this.getTimeSheetEntries()
            }
          })

          flag=1;
         // alert("hello");
        }
      }
      if(flag==0){
        let obj = {
          resource_id : this.username.id,
          startdate : this.firtday,
          enddate : this.lastday,
        }
        let t_st=[];
        t_st.push(obj)
        this.timeService.createTimeSheet(obj).subscribe(result=>{
          console.log('Inserted in Time Sheet')

          this.ActionTimeSheet();
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
       this.firtday = new Date(first)
      this.lastday = new Date(last)
      for (let i = 0; i <= 6; i++) {
        let day = weekStart + i
        let weekday = this.weekLastDay.setDate(day);
        let week = new Date(weekday)
        this.dateArray.push(week);
      }

    }
    return this.dt && this.dt.getTime() || new Date().getTime();

  }
  createTimeSheetList(){
    for(let i = 0;i<7;i++){
      let obj={
        project_id : null,
        timesheetId : this.timeSheetId,
        time_date : this.dateArray[i],
        hours : 0
      }
      this.sampleTimeSheetEntry.push(obj)
    }
    console.log("sample",this.sampleTimeSheetEntry)
  }
  getProject(value:any,updatedate:any){
    if(this.timeSheetEntryArray.length==0){
      for(let i =0;i<this.sampleTimeSheetEntry.length;i++){
        if(this.sampleTimeSheetEntry[i].time_date.getTime()==updatedate.getTime()){
          this.sampleTimeSheetEntry[i].project_id = value.id
        }
      }
    }
    else{
      for(let i=0;i<this.timeSheetEntryArray.length;i++){
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == updatedate.getTime()){

          this.timeSheetEntryArray[i].project_id = value.id
        }
      }
    }
  }
  saveTimeSheet(){
    if(this.timeSheetEntryArray.length==0){
      for(let i =0 ; i< this.sampleTimeSheetEntry.length;i++){
        if(this.sampleTimeSheetEntry[i].time_date.getTime() == this.dateArray[0].getTime()){
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
      //alert("Came to Save");
      console.log(this.sampleTimeSheetEntry);
      for(let i =0;i<this.sampleTimeSheetEntry.length;i++){
        this.timeService.createTimeSheetEntries(this.sampleTimeSheetEntry[i]).subscribe(result=>{
          console.log(result);
          this.ActionTimeSheet()
        })
      }

    }
    else{
      for(let i =0 ; i< this.timeSheetEntryArray.length;i++){
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[0].getTime()){
          this.timeSheetEntryArray[i].hours = this.day1
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[1].getTime()){
          this.timeSheetEntryArray[i].hours = this.day2
          //alert("Sandeep");
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[2].getTime()){
          this.timeSheetEntryArray[i].hours = this.day3
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[3].getTime()){
          this.timeSheetEntryArray[i].hours = this.day4
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[4].getTime()){
          this.timeSheetEntryArray[i].hours = this.day5
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[5].getTime()){
          this.timeSheetEntryArray[i].hours = this.day6
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[6].getTime()){
          this.timeSheetEntryArray[i].hours = this.day7
        }
        //console.log(i)
      }
      console.log('<111->',this.timeSheetEntryArray)
      for(let i=0;i<this.timeSheetEntryArray.length;i++){
        this.timeService.UpdateTimeSheetEnteries(this.timeSheetEntryArray[i]).subscribe(result=>{
          console.log(result)
        //  alert(i)
          if(i ==6){
         //   alert("Updated Successfully");
            this.ActionTimeSheet()
          }
        })
      }
    }

  }
  getAllTimeSheets(){
    this.timeService.getAllTimeSheets().subscribe(time=>{
      console.log(time)
      this.Sheets = time
      console.log('sheets',this.Sheets)
    })
  }
  getTimeSheetEntries(){
    for(let i =0;i<this.timeSheetEntryArray.length;i++){
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[0].getTime()){
        this.day1= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[1].getTime()){
        this.day2= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[2].getTime()){
        this.day3= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[3].getTime()){
        this.day4= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[4].getTime()){
        this.day5= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[5].getTime()){
        this.day6= this.timeSheetEntryArray[i].hours
      }
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[6].getTime()){
        this.day7= this.timeSheetEntryArray[i].hours
      }
    }
    console.log('TimeSheetEntry array',this.timeSheetEntryArray)
    this.dataTable();
  }
  dataTable(){
    this.totalhours=0;
    this.dataTableArray=[]
    for (let i =0;i<this.timeSheetEntryArray.length;i++){
      if(this.timeSheetEntryArray[i].project_id!=null){
        this.totalhours= this.totalhours+this.timeSheetEntryArray[i].hours
        this.dataTableArray.push(this.timeSheetEntryArray[i])

      }
    }
  }
  deleteTimeSheetEntry(id,date){

    for(let i =0;i<this.timeSheetEntryArray.length;i++){
      if(this.timeSheetEntryArray[i].id == id){
        this.timeSheetEntryArray[i].project_id=null;
        this.timeSheetEntryArray[i].hours=0;
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[0].getTime()){
          this.day1=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[1].getTime()){
          this.day2=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[2].getTime()){
          this.day3=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[3].getTime()){
          this.day4=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[4].getTime()){
          this.day5=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[5].getTime()){
          this.day6=0
        }
        if(new Date(this.timeSheetEntryArray[i].time_date).getTime() == this.dateArray[6].getTime()){
          this.day7=0
        }
      }
    }
    this.saveTimeSheet()
  }
  tabSelect(date){
    for(let i =0;i<this.timeSheetEntryArray.length;i++){
      if(new Date(this.timeSheetEntryArray[i].time_date).getTime()== date.getTime()){
        this.ProjectsSearch=this.timeSheetEntryArray[i].projects.name
       // alert(this.ProjectsSearch)
      }
    }
    //alert(date);
  }

}
