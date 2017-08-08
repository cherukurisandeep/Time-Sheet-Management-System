import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[DatepickerModule],
      providers : [DatepickerModule , NgModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    /*fixture.detectChanges();*/
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  /*it('get Time ',()=>{
    expect(component.getDate()).toBeNull(false)
  })*/
});
