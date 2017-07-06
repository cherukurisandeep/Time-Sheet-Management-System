import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheetDataComponent } from './time-sheet-data.component';

describe('TimeSheetDataComponent', () => {
  let component: TimeSheetDataComponent;
  let fixture: ComponentFixture<TimeSheetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
