import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  GithubService } from './service/github.service';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule , HttpModule],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers:     [  GithubService ]
})
export class AppModule { }
