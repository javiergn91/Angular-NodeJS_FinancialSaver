import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  readonly URL_API = "http://localhost:3000/api/transactions";

  constructor(private http:HttpClient) { }

  getTransactions() {
    return this.http.get(this.URL_API);
  }

  deleteTransaction(id: number) {
    return this.http.delete(this.URL_API + "/" + id);
  }
}
