import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(
    public dataService: DataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactFormGroup = this.formBuilder
    .group({
      name: [this.dataService.repairRequest.customer.name, [
        Validators.required, Validators.maxLength(100)
      ]],
      email: [this.dataService.repairRequest.customer.email, [
        Validators.required, Validators.email
      ]],
      phone: [this.dataService.repairRequest.customer.tel_number, [
        Validators.required
      ]],
      address: [this.dataService.repairRequest.customer.address, [
        Validators.required, Validators.maxLength(200)
      ]],
      termsAggreed: [this.dataService.repairRequest.termsAggreed, [
        Validators.required
      ]]
    });
  }

  public back(): void {}

  public forward(): void {}
}
