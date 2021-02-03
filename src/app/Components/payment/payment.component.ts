import { Component, AfterViewInit, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PayUnit } from '../../../../node_modules/payunitjs-test';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  amount;
  makeRegistration: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.makeRegistration = this.formBuilder.group({
      amount: ["amount"]
    });
  }
  getAmount(){
    console.log(this.makeRegistration.value.amount);
    this.amount = this.makeRegistration.value.amount;

    PayUnit({
      merchantName: environment.merchantName,
      merchantLogo: environment.merchantLogo,
      styles: environment.styles
    }, {
      apiUsername: environment.apiUsername,
      apiPassword: environment.apiPassword,
      x_api_key: environment.x_api_key,
      mode: environment.mode
    }, {
      return_url: environment.return_url,
      // notify_url: environment.notify_url,
      description: environment.description,
      currency: environment.currency,
      purchaseRef: environment.purchaseRef,
      total_amount: this.amount,
      amount: this.amount,
      name: environment.name
    });
    
  }

  // ngAfterViewInit(): void {
  //   console.log(this.amount);
    
   

  // }


}
