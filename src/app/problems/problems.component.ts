import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRepairOption } from 'app/irepair-option';
import { DataService } from '../data.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  public selectedRepairOptions: IRepairOption[] = [];
  public price = 0;
  public selectedRepairOptionsDesc = '';

  constructor(public dataService: DataService) {
  }

  public ngOnInit() {
  }

  public back(): void {
    this.dataService.resetPhoneOption();
    this.price = 0;
    this.selectedRepairOptionsDesc = '';
  }

  public toggleRepairOption(ro: IRepairOption): void {
    const roIndex: number = this.selectedRepairOptions.indexOf(ro);

    if (roIndex < 0) {
      this.selectedRepairOptions.push(ro);
    } else {
      this.selectedRepairOptions.splice(roIndex, 1);
    }

    this.calculate();
  }

  private calculate(): void {
    this.selectedRepairOptionsDesc = this.selectedRepairOptions
      .map((repairOption: IRepairOption): string => repairOption.description)
      .join(', ');

    this.price = this.selectedRepairOptions
      .reduce((price: number, repairOption: IRepairOption) => price + repairOption.price, 0);
  }
}
