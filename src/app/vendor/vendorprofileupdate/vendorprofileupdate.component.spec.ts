import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorprofileupdateComponent } from './vendorprofileupdate.component';

describe('VendorprofileupdateComponent', () => {
  let component: VendorprofileupdateComponent;
  let fixture: ComponentFixture<VendorprofileupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorprofileupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
