import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorprofiledeleteComponent } from './vendorprofiledelete.component';

describe('VendorprofiledeleteComponent', () => {
  let component: VendorprofiledeleteComponent;
  let fixture: ComponentFixture<VendorprofiledeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorprofiledeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorprofiledeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
