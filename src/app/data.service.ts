import { Injectable } from "@angular/core";
import { IRepairTable, repairTable } from "../assets/repair/repairTable";
import { IPhoneOption } from "app/iphone-option";
import { IRepairOption } from "app/irepair-option";
import { IRepairRequest } from "app/irepair-request";

@Injectable()
export class DataService {
  public repairRequest: IRepairRequest;
  public phoneOptionId: number = null;
  public repairTable: IRepairTable = repairTable;

  constructor() {
    this.reset();
   }

  public resetPhoneOption() {
    this.repairRequest.phoneOption = null;
  }

  public reset(): void {
    this.repairRequest = {
      phoneOption: null,
      selectedRepairOptions: [],
      price: 0,
      warranty: null,
      securityCode: null,
      comment: null,
      imeis: [],
      termsAggreed: false,
      customer: {
        address: "",
        email: "",
        name: "",
        tel_number: ""
      }
    };
  }

  public selectPhoneOption(id: number) {
    this.repairRequest.phoneOption = this.repairTable
      .phoneOptions
      .find((phoneOption: IPhoneOption) => phoneOption.id === id);
  }

  public calculate(): void {
    this.repairRequest.price = this.repairRequest
      .selectedRepairOptions
      .reduce((price: number, repairOption: IRepairOption) =>
        price + repairOption.price, 0);
  }
}
