import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorregistrationComponent } from './vendorregistration/vendorregistration.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { VendorprofileupdateComponent } from './vendorprofileupdate/vendorprofileupdate.component';
import { VendorprofiledeleteComponent } from './vendorprofiledelete/vendorprofiledelete.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
const routes: Routes = [
  {
    path: 'vendor/registration',
    component: VendorregistrationComponent
  },
  {
    path: 'vendor/login',
    component: VendorloginComponent
  },
  {
    path: 'vendor',
    component: MainLayoutComponent,
    data: {
      title: 'vendor'
    },
    children: [
      {
        path: 'home',
        component: VendorhomeComponent,
      },
      {
        path: 'profile',
        component: VendorprofileComponent,
      },
      {
        path: 'updateprofile',
        component: VendorprofileupdateComponent,
      },
      {
        path: 'deletevendor',
        component: VendorprofiledeleteComponent,
      }
    ]
  },
  /*  { path: '**', component: P404Component }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
