import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from '../contact/contact.component';
import { routing } from './app.routes';
import { AboutModule } from 'about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
