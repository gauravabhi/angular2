import { Component, OnInit } from '@angular/core';
import { Modal } from './about.modal';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AlertService } from '../shared/share.service';

@Component({

    selector:'about',
    templateUrl:'./about.component.html',
    styleUrls: ['./about.component.css'],
     providers:[AlertService]

})

export class AboutComponent implements OnInit{
  public modal:any;
  public aboutForm:FormGroup;
  constructor(fb:FormBuilder,private alertService:AlertService){
    this.aboutForm=fb.group(new Modal([null,Validators.compose([Validators.required,Validators.minLength(8)])],"gaurav",28,"Male"));
  }
  submitted = false;

  onSubmit(value:any) { this.submitted = true; console.log(JSON.stringify(value));
   this.alertService.setData(value);
  }
  ngOnInit():void{
     
  }
}