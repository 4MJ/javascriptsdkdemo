// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  merchantName: 'Seven Manager',
  merchantLogo: './assets/images/SevenPay2x.png',
  styles: [{
    bgColor: '#eaeaea',
    mgColor: '#777',
    titleColor: '#13a59c'
  }],
  apiUsername: 'payunit_sand_Ch8pif04d',
  apiPassword: 'c1968535-1322-40f1-abf2-6ebba10e307d',
  x_api_key: '8fed05e7e34c97afc6332a121cc12d8beb87c635',
  mode: 'test',
  currency: 'XAF',
  return_url: 'http://127.0.0.1:4200/success',
  notify_url: 'http://192.168.100.10/seven-payunit-sandbox/notify',
  description: 'Online payment of registration',
  purchaseRef: '7dg87sfd8adasf8798',
  total_amount: '100',
  amount: '100',
  name: 'Seven Student Manager'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
