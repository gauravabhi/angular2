import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './hidden.directive';
import { AboutComponent } from './about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports:
     [
         CommonModule,
         FormsModule,
         ReactiveFormsModule
    ],
    declarations: 
    [  
        HighlightDirective ,
        AboutComponent 
    ],
    exports : [ AboutComponent ]
})
export class AboutModule {

}