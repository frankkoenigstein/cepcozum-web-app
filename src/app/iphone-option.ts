import { IRepairOption } from 'app/irepair-option';

/**
 * IPhoneOption
 */
export interface IPhoneOption {
  id: number;
  description: string;
  repairOptions: Array<IRepairOption>;
}
