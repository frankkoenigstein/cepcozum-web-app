import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';

export const IMEI_PATTERN: RegExp = /^[0-9]{15,16}$/g;

@Component({
  selector: 'app-problems-additional',
  templateUrl: './problems-additional.component.html',
  styleUrls: ['./problems-additional.component.css']
})
export class ProblemsAdditionalComponent implements OnInit {
  public problemsAddFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dataService: DataService
  ) {
  }

  ngOnInit() {
    this.problemsAddFormGroup = this.formBuilder
    .group({
      warranty: [this.dataService.repairRequest.warranty, [
        Validators.required
      ]],
      securityCode: [this.dataService.repairRequest.securityCode, [
        Validators.required,
        Validators.maxLength(32)
      ]],
      comment: [this.dataService.repairRequest.comment, [
        Validators.maxLength(500)
      ]],
      imei1: [this.dataService.repairRequest.imeis[0], [
        Validators.pattern(IMEI_PATTERN)
      ]],
      imei2: [this.dataService.repairRequest.imeis[0], [
        Validators.pattern(IMEI_PATTERN)
      ]]
    });
  }

  public back() {
    this.dataService.repairRequest.warranty = null;
    this.dataService.repairRequest.securityCode = null;
    this.dataService.repairRequest.comment = null;
    this.dataService.repairRequest.imeis = [];
  }

  public forward() {
    this.dataService.repairRequest.warranty = this.problemsAddFormGroup.get("warranty").value;
    this.dataService.repairRequest.securityCode = this.problemsAddFormGroup.get("securityCode").value;
    this.dataService.repairRequest.comment = this.problemsAddFormGroup.get("comment").value;
    this.dataService.repairRequest.imeis = [
      this.problemsAddFormGroup.get("imei1").value,
      this.problemsAddFormGroup.get("imei2").value
    ];
  }
}
