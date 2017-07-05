import { Injectable } from '@angular/core';
import { IRepairTable, repairTable } from '../assets/repair/repairTable';
import { IPhoneOption } from 'app/iphone-option';
import { IRepairOption } from 'app/irepair-option';

@Injectable()
export class DataService {
  public phoneOptionId: number = null;
  public phoneOption: IPhoneOption = null;
  public repairTable: IRepairTable = repairTable;
  public selectedRepairOptions: IRepairOption[] = [];
  public price = 0;

  constructor() { }

  public resetPhoneOption() {
    this.phoneOption = null;
  }

  public selectPhoneOption(id: number) {
    this.phoneOption = this.repairTable
      .phoneOptions
      .find((phoneOption: IPhoneOption) => phoneOption.id === id);
  }

  public calculate(): void {
    this.price = this.selectedRepairOptions
      .reduce((price: number, repairOption: IRepairOption) =>
        price + repairOption.price, 0);
  }
}
