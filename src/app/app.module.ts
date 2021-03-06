import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";
import {
  TranslateLoader,
  TranslateModule,
  TranslateStaticLoader
} from "ng2-translate";

import { PhoneSelectedGuardService } from "./phone-selected-guard.service";
import { ProblemsSelectedGuardService } from "./problems-selected-guard.service";

import { AppComponent } from "./app.component";
import { ProblemsComponent } from "./problems/problems.component";
import { PhoneComponent } from "./phone/phone.component";
import { DataService } from "./data.service";
import { DataComponent } from "./data/data.component";
import { ProblemsAdditionalComponent } from "./problems-additional/problems-additional.component";
import { OrderCardHeaderComponent } from "./order-card-header/order-card-header.component";
import { SendRepairRequestComponent } from "./send-repair-request/send-repair-request.component";
import { ContactComponent } from "./contact/contact.component";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "./assets/i18n", ".json");
}

const appRoutes: Routes = [
  { path: "phone", component: PhoneComponent },
  {
    path: "problems",
    component: ProblemsComponent,
    canActivate: [PhoneSelectedGuardService]
  },
  {
    path: "problemsadditional",
    component: ProblemsAdditionalComponent,
    canActivate: [ProblemsSelectedGuardService]
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [ProblemsSelectedGuardService]
  },
  {
    path: "sendRepairRequestComponent",
    component: SendRepairRequestComponent,
    canActivate: [ProblemsSelectedGuardService]
  },
  {
    path: "",
    redirectTo: "/phone",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/phone",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProblemsComponent,
    PhoneComponent,
    DataComponent,
    ProblemsAdditionalComponent,
    OrderCardHeaderComponent,
    SendRepairRequestComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    }),
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    DataService,
    PhoneSelectedGuardService,
    ProblemsSelectedGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
