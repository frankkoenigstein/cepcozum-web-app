import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

import { IRepairOption } from 'app/irepair-option';
import { DataService } from '../data.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  public problemsFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dataService: DataService
  ) {}

  public ngOnInit() {
    this.problemsFormGroup = this.formBuilder.group({
      repairOptions: this.formBuilder.array([])
    });

    this.setRepairOptions(this.repairOptions);
  }

  public setRepairOptions(repairOptions: IRepairOption[]): void {
    const repairOptionFGs: FormGroup[] = repairOptions
      .map((ro: IRepairOption) => this.formBuilder.group({
        selected: this.dataService.repairRequest.selectedRepairOptions.indexOf(ro) >= 0
      }));

    const repairOptionsFA: FormArray = this.formBuilder.array(repairOptionFGs);
    this.problemsFormGroup.setControl('repairOptions', repairOptionsFA);
  }

  public get repairOptions(): IRepairOption[] {
    if (!this.dataService.repairRequest.phoneOption) {
      return [];
    }

    return this.dataService.repairRequest.phoneOption.repairOptions;
  }

  public get repairOptionControls(): FormArray {
    return this.problemsFormGroup.get('repairOptions') as FormArray;
  }

  public back(): void {
    this.dataService.reset();
  }

  public toggleRepairOption(ro: IRepairOption): void {
    const roIndex: number = this.dataService.repairRequest.selectedRepairOptions.indexOf(
      ro
    );

    if (roIndex < 0) {
      this.dataService.repairRequest.selectedRepairOptions.push(ro);
    } else {
      this.dataService.repairRequest.selectedRepairOptions.splice(roIndex, 1);
    }

    this.dataService.calculate();
  }

  public isChecked(ro: IRepairOption): boolean {
    return this.dataService.repairRequest.selectedRepairOptions
      .indexOf(ro) >= 0;
  }
}
