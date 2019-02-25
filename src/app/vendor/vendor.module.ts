import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorregistrationComponent } from './vendorregistration/vendorregistration.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { VendorprofileupdateComponent } from './vendorprofileupdate/vendorprofileupdate.component';
import { VendorprofiledeleteComponent } from './vendorprofiledelete/vendorprofiledelete.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VendorregistrationComponent, VendorloginComponent, VendorprofileComponent, VendorprofileupdateComponent, VendorprofiledeleteComponent, VendorhomeComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ]
})
export class VendorModule { }
