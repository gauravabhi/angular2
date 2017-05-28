import { Component, OnInit } from '@angular/core';
import { Modal } from './about.modal';

@Component({

    selector:'about',
    templateUrl:'./about.component.html'
})

export class AboutComponent implements OnInit{
  public modal:any;
   ngOnInit(){
    this.modal=new Modal("abhishek","gaurav",28,"Male");

   }
  submitted = false;

  onSubmit() { this.submitted = true; console.log(JSON.stringify(this.modal));}
}