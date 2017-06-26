import { Injectable } from '@angular/core';
import { repairTable } from '../assets/repair/repairTable';
import { IPhoneOption } from 'app/iphone-option';

@Injectable()
export class DataService {
  public phoneOptionId: number = null;
  public phoneOption: IPhoneOption = null;
  public repairTable: Array<IPhoneOption> = repairTable;

  constructor() { }

  public resetPhoneOption() {
    this.phoneOption = null;
  }

  public selectPhoneOption(id: number) {
    this.phoneOption = this.repairTable
      .find((phoneOption: IPhoneOption) => phoneOption.id === id);
  }
}
