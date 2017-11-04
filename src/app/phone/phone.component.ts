import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/startWith";

import { IPhoneOption } from "../iphone-option";
import { DataService } from "../data.service";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.component.html",
  styleUrls: ["./phone.component.css"]
})
export class PhoneComponent implements OnInit {
  public phoneOptionControl: FormControl = new FormControl(null, Validators.required);
  public filteredOptions: Observable<string[]>;
  public phoneOptionId: number;

  constructor(public dataService: DataService) { }

  public ngOnInit() {
    this.filteredOptions = this
      .phoneOptionControl
      .valueChanges
      .startWith(null)
      .map(val => {
        if (val) {
          this.setPhoneOption();
          return this.filter(val);
        } else {
          return this.dataService
            .repairTable
            .phoneOptions
            .map((po: IPhoneOption) => po.description);
        }
      });
  }

  public selectPhoneOption(): void {

  }

  private filter(val: string): string[] {
    return this.dataService
      .repairTable
      .phoneOptions
      .filter((phoneOption: IPhoneOption) => new RegExp(`${val}`, "gi").test(phoneOption.description))
      .map((phoneOption: IPhoneOption) => phoneOption.description);
  }

  private setPhoneOption() {
    if (this.phoneOptionControl.valid) {
      const poRegExp: RegExp = new RegExp(`^${this.phoneOptionControl.value}$`, "gi");

      this.phoneOptionId = this.dataService
        .repairTable
        .phoneOptions
        .filter((po: IPhoneOption): boolean => poRegExp.test(po.description))
        .map((po: IPhoneOption): number => po.id)
        .shift();
    } else {
      this.phoneOptionId = null;
    }

    this.dataService.selectPhoneOption(this.phoneOptionId);
  }
}
