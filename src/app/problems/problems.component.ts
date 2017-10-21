import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRepairOption } from 'app/irepair-option';
import { DataService } from '../data.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  constructor(
    public dataService: DataService
  ) {
  }

  public ngOnInit() {
  }

  public back(): void {
    this.dataService.resetPhoneOption();
    this.dataService.repairRequest.price = 0;
    this.dataService.repairRequest.selectedRepairOptions = [];
  }

  public toggleRepairOption(ro: IRepairOption): void {
    const roIndex: number = this.dataService.repairRequest.selectedRepairOptions.indexOf(ro);

    if (roIndex < 0) {
      this.dataService.repairRequest.selectedRepairOptions.push(ro);
    } else {
      this.dataService.repairRequest.selectedRepairOptions.splice(roIndex, 1);
    }

    this.dataService.calculate();
  }
}
