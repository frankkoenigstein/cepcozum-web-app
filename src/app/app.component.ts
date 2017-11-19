import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Cepcozum";

  constructor(public translate: TranslateService) {
    translate.addLangs(["tr", "de"]);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("de");
    translate.use(translate.getBrowserLang());
  }

  public setLang(lang: string) {
    this.translate.use(lang);
  }
}
