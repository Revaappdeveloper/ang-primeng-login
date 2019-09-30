import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {EditorModule} from 'primeng/editor';
import {SelectButtonModule} from 'primeng/selectbutton';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    PasswordModule,
    EditorModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
