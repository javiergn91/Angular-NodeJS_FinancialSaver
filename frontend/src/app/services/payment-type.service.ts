import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentType } from 'src/app/models/paymentType';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  readonly URL_API = "http://localhost:3000/api/paymentTypes";

  constructor(private http: HttpClient) { }

  getPaymentTypes() {
    return this.http.get(this.URL_API);
  }

  addPaymentType(paymentType: PaymentType) {
    return this.http.post(this.URL_API, paymentType);
  }
}
