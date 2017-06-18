import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdSelectModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProblemsComponent } from './problems/problems.component';
import { PhoneComponent } from './phone/phone.component';
import { DataService } from './data.service';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemsComponent,
    PhoneComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
