import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "app/data.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
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
      name: [null, [
        Validators.required, Validators.maxLength(100)
      ]],
      email: [null, [
        Validators.required, Validators.email
      ]],
      phone: [null, [
        Validators.required
      ]],
      address: [null, [
        Validators.required, Validators.maxLength(200)
      // ]],
      // termsAggreed: [this.dataService.repairRequest.termsAggreed, [
      //   Validators.required
      ]]
    });

    if (this.dataService.repairRequest.customer) {
      this.contactFormGroup.setValue({
        name: this.dataService.repairRequest.customer.name,
        email: this.dataService.repairRequest.customer.email,
        phone: this.dataService.repairRequest.customer.tel_number,
        address: this.dataService.repairRequest.customer.address
      });
    }
  }

  public back(): void {
    if (!this.contactFormGroup.valid) {
      this.dataService.repairRequest.customer = undefined;
    }
  }

  public forward(): void {
    if (this.contactFormGroup.valid) {
      this.dataService.repairRequest.customer = {
        address: this.contactFormGroup.get("address").value,
        email: this.contactFormGroup.get("email").value,
        tel_number: this.contactFormGroup.get("phone").value,
        name: this.contactFormGroup.get("name").value,
      };
    }
  }
}
