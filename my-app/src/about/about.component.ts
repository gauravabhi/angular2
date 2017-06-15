import { Component, OnInit } from '@angular/core';
import { Modal } from './about.modal';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({

    selector:'about',
    templateUrl:'./about.component.html',
    styleUrls: ['./about.component.css']

})

export class AboutComponent{
  public modal:any;
  public aboutForm:FormGroup;
  constructor(fb:FormBuilder){
    this.aboutForm=fb.group(new Modal([null,Validators.compose([Validators.required,Validators.minLength(8)])],"gaurav",28,"Male"));
  }
  submitted = false;

  onSubmit(value:any) { this.submitted = true; console.log(JSON.stringify(value));}
}