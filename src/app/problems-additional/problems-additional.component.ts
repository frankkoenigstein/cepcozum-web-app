import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';

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
    this.problemsAddFormGroup = this.formBuilder
      .group({
        warranty: [dataService.warranty, [Validators.required]],
        securityCode: [dataService.securityCode, [Validators.required]]
      });
  }

  ngOnInit() {
    this.problemsAddFormGroup
      .valueChanges
      .subscribe((values) => console.debug(values));
  }

  public back() {
    this.dataService.warranty = null;
  }
}
