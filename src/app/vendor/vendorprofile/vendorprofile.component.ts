import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder){} 

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({     
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
