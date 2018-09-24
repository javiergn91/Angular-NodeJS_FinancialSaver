import { Component, OnInit } from '@angular/core';
import { Transaction } from "../models/transaction";
import { Category } from "../models/category";
import { PaymentType } from "../models/paymentType";
import { TransactionService } from 'src/app/services/transaction.service';
import { CategoryService } from "../services/category.service";
import { PaymentTypeService } from "../services/payment-type.service";
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  categories: Category[];
  paymentTypes: PaymentType[];
  category: Category;
  paymentType: PaymentType;
  transaction: Transaction;

  constructor(private transactionService: TransactionService, private categoryService: CategoryService, private paymentTypeService: PaymentTypeService) {
    this.category = new Category;
    this.paymentType = new PaymentType;
    this.transaction = new Transaction;
  }

  ngOnInit() {
    this.getTransactions();
    this.getCategories();
    this.getPaymentTypes();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result as Category[];
    });
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(result => {
      this.transactions = result as Transaction[];
    });
  }  

  getPaymentTypes() {
    this.paymentTypeService.getPaymentTypes().subscribe(result => {
      this.paymentTypes = result as PaymentType[];
    });
  }

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction.id).subscribe(result => {
      this.getTransactions();
    });
  }

  addCategory() {
    this.categoryService.addCategory(this.category).subscribe(result => {
      this.getCategories();
    });
  }

  addPaymentType() {
    this.paymentTypeService.addPaymentType(this.paymentType).subscribe(result => {
      this.getPaymentTypes();
    });
  }
}
