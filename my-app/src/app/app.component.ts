import { Component,OnInit } from '@angular/core';
import { AlertService } from '../shared/share.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AlertService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private alertService:AlertService){}
  ngOnInit():void{
    this.alertService.getData().subscribe(data => console.log(data));
  }
}
