import {Injectable } from '@angular/core';
import {Observable} from  'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService{
    private subject=new Subject<any>();
    constructor(){}
    setData(objData:any){
        this.subject.next(objData);
    }
    getData():Observable<any>{
        return this.subject.asObservable();
    }
}