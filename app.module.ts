import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './app.component';
import {EmployeeComponent} from './employee-app.component';
import {AppComponent} from './person-app.component';
import {MyHighlighterDirective} from './Directives/color-change.directive'

@NgModule({
  declarations: [
    EmployeeComponent,
    AppComponent,
    MyHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
