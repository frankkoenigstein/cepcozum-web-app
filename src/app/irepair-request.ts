import { IPhoneOption } from "app/iphone-option";
import { IRepairOption } from "app/irepair-option";
import { ICustomer } from "app/icustomer";

export interface IRepairRequest {
  phoneOption: IPhoneOption;
  selectedRepairOptions: IRepairOption[];
  price: number;
  warranty: boolean;
  securityCode: string;
  imeis: string[]; // 2
  comment: string; // max 500
  customer: ICustomer;
  termsAggreed: boolean;
}
