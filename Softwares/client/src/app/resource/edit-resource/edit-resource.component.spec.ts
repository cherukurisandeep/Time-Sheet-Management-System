import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EditResourceComponent } from './edit-resource.component';

describe('EditResourceComponent', () => {
  let component: EditResourceComponent;
  let fixture: ComponentFixture<EditResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas : [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EditResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
