import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRepairOption } from 'app/irepair-option';
import { DataService } from '../data.service';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  constructor(
    public dataService: DataService,
    private translate: TranslateService
  ) {
  }

  public ngOnInit() {
  }

  public back(): void {
    this.dataService.resetPhoneOption();
    this.dataService.price = 0;
    this.dataService.selectedRepairOptions = [];
  }

  public toggleRepairOption(ro: IRepairOption): void {
    const roIndex: number = this.dataService.selectedRepairOptions.indexOf(ro);

    if (roIndex < 0) {
      this.dataService.selectedRepairOptions.push(ro);
    } else {
      this.dataService.selectedRepairOptions.splice(roIndex, 1);
    }

    this.dataService.calculate();
  }
}
