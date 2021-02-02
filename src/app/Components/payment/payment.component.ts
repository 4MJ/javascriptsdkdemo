import { Component, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PayUnit } from '../../../../node_modules/payunitjs-test';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewInit {


  constructor() { }

  ngAfterViewInit(): void {

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
      notify_url: environment.notify_url,
      description: environment.description,
      purchaseRef: environment.purchaseRef,
      total_amount: environment.total_amount,
      amount: environment.amount,
      name: environment.name
    });

  }


}
