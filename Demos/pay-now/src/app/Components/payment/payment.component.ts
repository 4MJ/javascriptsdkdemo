import { Component, AfterViewInit } from '@angular/core';
import { PayUnit } from "../../../../node_modules/payunitjs-test"


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewInit {
 

  constructor() { }

  ngAfterViewInit(): void {
    let pu = PayUnit({
      merchantName: "Seven Student Manager",
      merchantLogo: "../../../assets/images/SevenPay2x.png",
      styles:[{
        bgColor: "#eaeaea",
        mgColor: "#777",
        titleColor: "#13a59c"
      }]
      },{
        apiUsername:'payunit_FNn3tfr1B',
        apiPassword:'bce66460-9c08-49be-af72-004bcc15e8df',
        x_api_key:'4ab167344898c11faf309957c1d27770e47f372d'
      },{
        return_url: "http://localhost:4200/payment",
      description: "Online payment of registration",
      purchaseRef: "7dg87sfd8adasf8798",
      total_amount: "500",
      amount: "500",
      name:"Seven Student Registration"
      });
  }


}
