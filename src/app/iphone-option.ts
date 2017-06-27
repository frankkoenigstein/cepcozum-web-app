import { IRepairOption } from 'app/irepair-option';


export interface IProblem {
  id: number;
  description: string;
}

/**
 * IPhoneOption
 */
export interface IPhoneOption {
  id: number;
  description: string;
  problems: IProblem[];
  repairOptions: Array<IRepairOption>;
}
