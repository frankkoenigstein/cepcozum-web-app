import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
