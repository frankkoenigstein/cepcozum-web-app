/**
 * Phone Problem
 */
export interface IProblem {
  id: number;
  description: string;
}

/**
 * Repair option
 */
export interface IRepairOption {
  problemId: number;
  'price': number;
  'currency': string;
}
