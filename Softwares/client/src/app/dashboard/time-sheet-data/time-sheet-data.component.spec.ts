import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SelectModule} from 'ng2-select';
import { HttpModule } from '@angular/http';
import { TimeSheetDataComponent } from './time-sheet-data.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {QueryApi} from './../../commonservice/request/QueryApi'
describe('TimeSheetDataComponent', () => {
  let component: TimeSheetDataComponent;
  let fixture: ComponentFixture<TimeSheetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers : [NgModule,SelectModule],
      imports : [HttpModule,QueryApi],
      schemas : [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ TimeSheetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
